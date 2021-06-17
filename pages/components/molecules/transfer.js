import { useEffect, useState, useRef } from 'react';
import fetchBankAccounts from '../../../services/accountService';
import Title from '../atoms/title';
import Container, { GridContainer } from '../atoms/container';
import Button from '../atoms/button';
import Input from '../atoms/input';
import { Modal, Content, Close } from '../atoms/modal';
import DropdownList from './dropdownList';

const Transfer = ({ isOpen, closeFn }) => {
  const [bankAccountsFrom, setBankAccountsFrom] = useState([]);
  const [bankAccountsTo, setBankAccountsTo] = useState([]);
  const [disableTransferBtn, setDisableTransferBtn] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen === false) return;

    const start = async () => {
      const res = await fetchBankAccounts();
      const resJson = await res.json();
      setBankAccountsFrom(resJson);
    };

    setBankAccountsFrom([]);
    setBankAccountsTo([]);
    inputRef.current.value = 0;
    setDisableTransferBtn(true);
    start();
  }, [isOpen]);

  const onBankAccountFromChange = evt => {
    const bankAccountTo = evt.target.value;

    if (bankAccountTo === '0') {
      setDisableTransferBtn(true);
      setBankAccountsTo([]);

      return;
    }

    const accounts = [...bankAccountsFrom];
    const currencyFrom = bankAccountsFrom.find(
      account => account.accountNumber === bankAccountTo
    ).currency;

    setBankAccountsTo(
      accounts.filter(
        account =>
          account.accountNumber !== bankAccountTo &&
          account.currency === currencyFrom
      )
    );
  };

  const onChangeBankAccountTo = evt => {
    if (evt.target.value === '0') {
      setDisableTransferBtn(true);
    } else {
      setDisableTransferBtn(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Transfer funds"
      data-cy="transfer-modal"
    >
      <Content width="60%" height="80%">
        <Close onClick={closeFn}> &times;</Close>
        <Title color="black">Transfer funds</Title>
        <Container
          marginTop="4em"
          align="center"
          width="70%"
          cy-data="transfer-dropdown-from"
        >
          <GridContainer columns="1fr" height="10em">
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
          </GridContainer>
          <Container marginTop="1em">
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
