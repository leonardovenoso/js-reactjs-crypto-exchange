const transactionGenerator = (currency, amountOfRecords) => {
  const credits = [];
  const debits = [];

  for (let i = 0; i < amountOfRecords; i++) {
    const randomAmount = Math.floor(Math.random() * (2000 - 300 + 1)) + 100;

    credits.push({
      action: 'credit',
      amount: randomAmount,
      currency,
      description: 'Savings',
      timestamp: Date.now(),
    });

    debits.push({
      action: 'debit',
      amount: randomAmount,
      currency,
      description: 'Savings',
      timestamp: Date.now(),
    });
  }

  return { credits, debits };
};

const initialTransactionsInSGD = transactionGenerator('SGD', 2);

export const accountInformation = [
  {
    accountNumber: '13311110000',
    amount: 55000,
    bankName: 'POSB',
    currency: 'SGD',
    transactions: initialTransactionsInSGD.credits,
  },
  {
    accountNumber: '13311110001',
    amount: 3,
    bankName: 'POSB',
    currency: 'BTC',
    transactions: [],
  },
  {
    accountNumber: '35625270301',
    amount: 130000,
    bankName: 'UOB',
    currency: 'SGD',
    transactions: initialTransactionsInSGD.debits,
  },
  {
    accountNumber: '501123956001',
    amount: 50000,
    bankName: 'OCBC',
    currency: 'USD',
    transactions: [],
  },
  {
    accountNumber: '501123956003',
    amount: 0.001,
    bankName: 'OCBC',
    currency: 'BTC',
    transactions: [],
  },
  {
    accountNumber: '000123985397',
    amount: 8,
    bankName: 'Bank of America',
    currency: 'BTC',
    transactions: [],
  },
  {
    accountNumber: '4403163483345',
    amount: 0,
    bankName: 'May Bank',
    currency: 'BTC',
    transactions: [],
  },
];
