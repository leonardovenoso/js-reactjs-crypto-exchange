import { useEffect, useState, useRef } from 'react';
import fetchBankAccounts, {
  transferCurrency,
} from '../../services/accountService';
import Title from '../atoms/title';
import Container from '../atoms/container';
import Button from '../atoms/button';
import Input from '../atoms/input';
import TextArea from '../atoms/textArea';
import { Modal, Content, Close } from '../atoms/modal';
import DropdownList from './dropdownList';

const Transfer = ({ isOpen, closeFn }) => {
  const [bankAccountsFrom, setBankAccountsFrom] = useState([]);
  const [bankAccountsTo, setBankAccountsTo] = useState([]);
  const [disableTransferBtn, setDisableTransferBtn] = useState(true);
  const [errors, setErrors] = useState([]);
  const [bankAccountFrom, setBankAccountFrom] = useState('0');
  const [bankAccountTo, setBankAccountTo] = useState('0');
  const [successMessage, setSuccessMessage] = useState('');
  const inputRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (isOpen === false) return;

    const start = async () => {
      const res = await fetchBankAccounts();
      const resJson = await res.json();
      setBankAccountsFrom(resJson);
    };

    setBankAccountsFrom([]);
    setBankAccountsTo([]);
    setBankAccountFrom('0');
    setBankAccountTo('0');
    setSuccessMessage('');
    inputRef.current.value = 0;
    setDisableTransferBtn(true);
    start();
  }, [isOpen]);

  const onBankAccountFromChange = evt => {
    const bankAccountFrom = evt.target.value;

    if (bankAccountFrom === '0') {
      setDisableTransferBtn(true);
      setBankAccountsTo([]);
      setBankAccountFrom(0);
      setBankAccountTo(0);
      return;
    }

    setBankAccountFrom(bankAccountFrom);

    const accounts = [...bankAccountsFrom];
    const currencyFrom = bankAccountsFrom.find(
      account => account.accountNumber === bankAccountFrom
    ).currency;

    setBankAccountsTo(
      accounts.filter(
        account =>
          account.accountNumber !== bankAccountFrom &&
          account.currency === currencyFrom
      )
    );
  };

  const onChangeBankAccountTo = evt => {
    const bankAccountTo = evt.target.value;

    if (bankAccountTo === '0') {
      setDisableTransferBtn(true);
      setBankAccountTo(0);
    } else {
      setDisableTransferBtn(false);
      setBankAccountTo(bankAccountTo);
    }
  };

  const transferFunds = async () => {
    const amount = inputRef.current.value;

    if (amount <= 0) {
      setErrors(['Amount to transfer should be greater than 0']);
      return;
    }

    setDisableTransferBtn(true);
    const res = await transferCurrency(
      bankAccountFrom,
      bankAccountTo,
      amount,
      descriptionRef.current.value
    );
    const resJson = await res.json();

    if (resJson.status === 'error') {
      setErrors([resJson.message]);
      setDisableTransferBtn(false);
    } else {
      setErrors([]);
      setSuccessMessage([resJson.message]);
      setTimeout(() => {
        closeFn();
        isOpen = false;
      }, 3000);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Transfer funds"
      data-cy="transfer-modal"
    >
      <Content width="60%" height="74%">
        <Close onClick={closeFn}> &times;</Close>
        <Title color="black">Transfer funds</Title>
        <div className="error">
          {errors.map((error, i) => (
            <p key={i}>{error}</p>
          ))}
        </div>
        <div className="success">
          <p>{successMessage}</p>
        </div>

        <Container
          marginTop="4em"
          align="center"
          width="70%"
          cy-data="transfer-dropdown-from"
        >
          <Container marginTop="1.8em">
            <DropdownList
              defaultLabel="Select account from"
              defaultValue="0"
              list={bankAccountsFrom}
              listKeyLabel="accountNumber"
              listKeyValue="accountNumber"
              block={false}
              optionLabelFn={el => `
              ${el.bankName} - ${el.accountNumber} - ${el.currency} ${el.amount}`}
              cyDataSelector="select-bank-account-from"
              onChangeFn={onBankAccountFromChange}
            />
          </Container>
          <Container marginTop="1.8em">
            <DropdownList
              defaultLabel="Select account to"
              defaultValue="0"
              list={bankAccountsTo}
              listKeyLabel="accountNumber"
              listKeyValue="accountNumber"
              block={false}
              optionLabelFn={el => `
              ${el.bankName} - ${el.accountNumber} - ${el.currency} ${el.amount}`}
              cyDataSelector="select-bank-account-to"
              onChangeFn={onChangeBankAccountTo}
            />
          </Container>
          <Container marginTop="1.8em">
            <TextArea
              placeholder="description"
              maxlength="255"
              ref={descriptionRef}
            />
          </Container>
          <Container marginTop="1.8em">
            <Input
              onKeyPress={evt => {
                if (!/[0-9]/.test(evt.key)) {
                  evt.preventDefault();
                }
              }}
              color="tomato"
              ref={inputRef}
              data-cy="transfer-input"
            />
          </Container>
          <Container align="right">
            <Button
              disabled={disableTransferBtn ? true : null}
              data-cy="transfer-btn"
              onClick={transferFunds}
            >
              Transfer
            </Button>
          </Container>
        </Container>
      </Content>
    </Modal>
  );
};

export default Transfer;
