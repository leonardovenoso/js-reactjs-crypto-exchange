import { useEffect, useState, useRef } from 'react';
import fetchBankAccounts, {
  fetchTransactionsByAccountNumber,
} from '../services/accountService';
import Container from './components/atoms/container';
import Title from './components/atoms/title';
import Select from './components/atoms/select';
import Table, { Header, Body, Row } from './components/atoms/table';

export default function CryptoExchange() {
  const [bankAccounts, setBankAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const bankAccountsRef = useRef(null);

  useEffect(() => {
    const start = async () => {
      const res = await fetchBankAccounts();
      const resJson = await res.json();
      setBankAccounts(resJson);
    };

    start();
  }, []);

  const fetchTransactions = async () => {
    if (bankAccountsRef.current.value === '0') {
      setTransactions([]);
      return;
    }
    const res = await fetchTransactionsByAccountNumber(
      bankAccountsRef.current.value
    );
    const resJson = await res.json();
    setTransactions(resJson);
  };

  return (
    <div>
      <main>
        <Container>
          <Title>Crypto Exchange</Title>
        </Container>
        <Container>
          <Select
            defaultValue={{ label: 'Select account', value: 0 }}
            data-cy="select-bank-account"
            onChange={fetchTransactions}
            ref={bankAccountsRef}
          >
            <option value="0">Select account</option>
            {bankAccounts.map(account => (
              <option
                key={account.accountNumber}
                value={account.accountNumber}
              >{`${account.bankName} - ${account.accountNumber} (${account.currency})`}</option>
            ))}
          </Select>
          <Container>
            <Table>
              <Header
                data-cy="transactions-header"
                columns="1fr 1fr 1fr 0.3fr 0.2fr"
              >
                <div>Time</div>
                <div>Action</div>
                <div>Description</div>
                <div>Currency</div>
                <div>Amount</div>
              </Header>
              <Body data-cy="transactions-body">
                {transactions.map(transaction => (
                  <Row
                    key={transaction.timestamp}
                    columns="1fr 1fr 1fr 0.3fr 0.2fr"
                  >
                    <div>{transaction.timestamp}</div>
                    <div>{transaction.action}</div>
                    <div>{transaction.description}</div>
                    <div>{transaction.currency}</div>
                    <div>{transaction.amount}</div>
                  </Row>
                ))}
                {bankAccountsRef &&
                  bankAccountsRef.current &&
                  bankAccountsRef.current.value === '0' && (
                    <Container>
                      <Title>Select a bank account</Title>
                    </Container>
                  )}
              </Body>
            </Table>
          </Container>
        </Container>
      </main>
    </div>
  );
}
