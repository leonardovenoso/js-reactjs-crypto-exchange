import { useEffect, useState } from 'react';
import fetchBankAccounts from '../services/accountService';
import Container from './components/atoms/container';
import Title from './components/atoms/title';
import Select from './components/atoms/select';

export default function CryptoExchange() {
  const [bankAccounts, setBankAccounts] = useState([]);

  useEffect(() => {
    const start = async () => {
      const res = await fetchBankAccounts();
      const resJson = await res.json();
      setBankAccounts(resJson);
    };

    start();
  }, []);

  return (
    <div>
      <main>
        <Container>
          <Title>Crypto Exchange</Title>
        </Container>
        <Container>
          <Select data-cy="bank-accounts">
            {bankAccounts.map(account => (
              <option
                key={account.accountNumber}
              >{`${account.bankName} - ${account.accountNumber} (${account.currency})`}</option>
            ))}
          </Select>
        </Container>
      </main>
    </div>
  );
}
