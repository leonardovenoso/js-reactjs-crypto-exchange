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
    amount: 55000,
    bankName: 'POSB',
    currency: 'SGD',
    number: '13311110000',
    transactions: initialTransactionsInSGD.credits,
  },
  {
    amount: 3,
    bankName: 'POSB',
    currency: 'BTC',
    number: '13311110001',
    transactions: [],
  },
  {
    amount: 130000,
    bankName: 'UOB',
    currency: 'SGD',
    number: '35625270301',
    transactions: initialTransactionsInSGD.debits,
  },
  {
    amount: 50000,
    bankName: 'OCBC',
    currency: 'USD',
    number: '501123956001',
    transactions: [],
  },
  {
    amount: 0.001,
    bankName: 'OCBC',
    currency: 'BTC',
    number: '501123956003',
    transactions: [],
  },
  {
    amount: 8,
    bankName: 'Bank of America',
    currency: 'BTC',
    number: '000123985397',
    transactions: [],
  },
  {
    amount: 0,
    bankName: 'May Bank',
    currency: 'BTC',
    number: '4403163483345',
    transactions: [],
  },
];
