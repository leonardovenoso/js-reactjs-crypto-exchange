import { useEffect, useState } from 'react';
import fetchBankAccounts, {
  fetchTransactionsByAccountNumber,
} from '../services/accountService';
import Container from './components/atoms/container';
import Title from './components/atoms/title';
import DropdownList from './components/molecules/dropdownList';
import Spinner from './components/atoms/spinner';

import Table, {
  Header,
  Body,
  Row,
  RowWithBorderBottom,
} from './components/atoms/table';
import Button from './components/atoms/button';

export default function CryptoExchange() {
  const [bankAccounts, setBankAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [isAcountNumberSelected, setIsAcountNumberSelected] = useState(false);

  useEffect(() => {
    const start = async () => {
      const res = await fetchBankAccounts();
      const resJson = await res.json();
      setBankAccounts(resJson);
    };

    start();
  }, []);

  const fetchTransactions = async accountNumber => {
    if (accountNumber === '0') {
      setIsAcountNumberSelected(false);
      setTransactions([]);
      setShowSpinner(false);
      return;
    }

    setIsAcountNumberSelected(true);
    setTransactions([]);
    setShowSpinner(true);
    const res = await fetchTransactionsByAccountNumber(accountNumber);
    const resJson = await res.json();
    setShowSpinner(false);
    setTransactions(resJson);
  };

  return (
    <div>
      <main>
        <Container>
          <Title>Crypto Exchange</Title>
        </Container>
        <Container>
          <Table>
            <Row columns="1fr 1fr">
              <Container marginTop="0">
                <DropdownList
                  defaultLabel="Select account"
                  defaultValue="0"
                  list={bankAccounts}
                  listKeyLabel="accountNumber"
                  listKeyValue="accountNumber"
                  optionLabelFn={el => `
                    ${el.bankName} - ${el.accountNumber} (${el.currency})`}
                  cyDataSelector="select-bank-account"
                  onChangeFn={fetchTransactions}
                />
              </Container>
              <Container marginTop="0" align="right" marginRight="3em">
                <Button type="button">Transfer</Button>
              </Container>
            </Row>
          </Table>
          <Container>
            <Table>
              <Header
                data-cy="transactions-header"
                columns="0.1fr 1fr 1fr 1fr 0.3fr 0.2fr"
              >
                <div>#</div>
                <div>Time</div>
                <div>Action</div>
                <div>Description</div>
                <div>Currency</div>
                <div>Amount</div>
              </Header>
              <Body data-cy="transactions-body">
                {transactions.map((transaction, i) => (
                  <RowWithBorderBottom
                    key={i}
                    columns="0.1fr 1fr 1fr 1fr 0.3fr 0.2fr"
                  >
                    <div>{i + 1}</div>
                    <div>{transaction.timestamp}</div>
                    <div>{transaction.action}</div>
                    <div>{transaction.description}</div>
                    <div>{transaction.currency}</div>
                    <div>{transaction.amount}</div>
                  </RowWithBorderBottom>
                ))}
              </Body>
              <div>
                {!isAcountNumberSelected && (
                  <Container>
                    <Title size="1.2em">Select a bank account</Title>
                  </Container>
                )}
                {isAcountNumberSelected &&
                  transactions[0] === undefined &&
                  !showSpinner && (
                    <Container>
                      <Title size="1.2em">No transactions found</Title>
                    </Container>
                  )}
                <Container align="center" marginTop="5em">
                  {showSpinner && <Spinner />}
                </Container>
              </div>
            </Table>
          </Container>
        </Container>
      </main>
    </div>
  );
}
