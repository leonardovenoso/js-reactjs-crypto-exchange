import { useEffect, useState } from 'react';
import fetchBankAccounts from '../services/accountService';

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
        <h1>Crypto Exchange</h1>
        <Select data-cy="bank-accounts">
          {bankAccounts.map(account => (
            <option
              key={account.accountNumber}
            >{`${account.bankName} - ${account.accountNumber} (${account.currency})`}</option>
          ))}
        </Select>
      </main>
    </div>
  );
}
