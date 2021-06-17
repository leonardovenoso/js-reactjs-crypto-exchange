import { useEffect, useState } from 'react';
import fetchBankAccounts, {
  fetchTransactionsByAccountNumber,
} from '../services/accountService';
import GridTable from './components/molecules/gridTable';
import DropdownList from './components/molecules/dropdownList';
import Transfer from './components/molecules/transfer';
import Table, { Row } from './components/atoms/table';
import Container from './components/atoms/container';
import Title from './components/atoms/title';
import Spinner from './components/atoms/spinner';
import Button from './components/atoms/button';

export default function CryptoExchange() {
  const [bankAccounts, setBankAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [isAcountNumberSelected, setIsAcountNumberSelected] = useState(false);
  const [isTransferModalOpen, setTransferModalOpen] = useState(false);

  useEffect(() => {
    const start = async () => {
      const res = await fetchBankAccounts();
      const resJson = await res.json();
      setBankAccounts(resJson);
    };

    start();
  }, []);

  const fetchTransactions = async evt => {
    const accountNumber = evt.target.value;

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

  const openTransferModal = () => setTransferModalOpen(true);
  return (
    <div>
      <main>
        <Container>
          <Title>Crypto Exchange</Title>
        </Container>
        <Container>
          <Table>
            <Row columns="0.3fr 1fr">
              <Container marginTop="0">
                <DropdownList
                  defaultLabel="Select account"
                  defaultValue="0"
                  list={bankAccounts}
                  listKeyLabel="accountNumber"
                  listKeyValue="accountNumber"
                  block={showSpinner}
                  optionLabelFn={el => `
                    ${el.bankName} - ${el.accountNumber} (${el.currency})`}
                  cyDataSelector="select-bank-account"
                  onChangeFn={fetchTransactions}
                  key="bank-accounts"
                />
              </Container>
              <Container marginTop="0" align="right" marginRight="3em">
                <Button type="button" onClick={openTransferModal}>
                  Transfer
                </Button>
              </Container>
            </Row>
          </Table>
          <Container>
            <GridTable
              columns="0.4fr 0.4fr 1fr 0.2fr 0.2fr"
              columnLabels={[
                { alignment: 'left', name: 'Time' },
                { alignment: 'left', name: 'Action' },
                { alignment: 'left', name: 'Description' },
                { alignment: 'left', name: 'Currency' },
                { alignment: 'right', name: 'Amount' },
              ]}
              dataCyHeader="transactions-header"
              dataCyBody="transactions-body"
              list={transactions}
              listObjAttrs={[
                { alignment: 'left', name: 'timestamp' },
                { alignment: 'left', name: 'action' },
                { alignment: 'left', name: 'description' },
                { alignment: 'left', name: 'currency' },
                { alignment: 'right', name: 'amount' },
              ]}
            />
            <div>
              {!isAcountNumberSelected && (
                <Container>
                  <Title size="1.2em">
                    Select a bank account to list your transactions
                  </Title>
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
          </Container>
        </Container>
        <Transfer
          isOpen={isTransferModalOpen}
          closeFn={() => setTransferModalOpen(false)}
        />
      </main>
    </div>
  );
}
