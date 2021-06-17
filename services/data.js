const transactionGenerator = (currency, amountOfRecords) => {
  const credits = [];
  const debits = [];

  for (let i = 0; i < amountOfRecords; i++) {
    const randomAmount = Math.floor(Math.random() * (2000 - 300 + 1)) + 100;

    credits.push({
      action: 'Credit',
      amount: randomAmount,
      currency,
      description: 'Savings',
      timestamp: Date.now(),
    });

    debits.push({
      action: 'Debit',
      amount: randomAmount,
      currency,
      description: 'Savings',
      timestamp: Date.now(),
    });
  }

  return { credits, debits };
};

const initialTransactionsInSGD = transactionGenerator('SGD', 100);

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
    currency: 'USD',
    transactions: [],
  },
  {
    accountNumber: '4403163483345',
    amount: 0,
    bankName: 'Maybank',
    currency: 'BTC',
    transactions: [],
  },
];

const addTransaction = (
  accountFromIndex,
  accountToIndex,
  amount,
  description
) => {
  accountInformation[accountFromIndex].transactions.push({
    action: 'debit',
    amount: -amount,
    currency: accountInformation[accountFromIndex].currency,
    description,
    timestamp: Date.now(),
  });
  accountInformation[accountFromIndex].amount -= parseFloat(amount);

  accountInformation[accountToIndex].transactions.push({
    action: 'credit',
    amount,
    currency: accountInformation[accountToIndex].currency,
    description,
    timestamp: Date.now(),
  });
  accountInformation[accountToIndex].amount += parseFloat(amount);
  debugger;
};

export const transfer = (
  accountNumberFrom,
  accountNumberTo,
  amount,
  description
) => {
  const accountFromIndex = accountInformation.findIndex(
    account => account.accountNumber === accountNumberFrom
  );
  const accountToIndex = accountInformation.findIndex(
    account => account.accountNumber === accountNumberTo
  );

  if (parseInt(amount, 10) === 0) {
    return { message: 'Amount should be greater than 0', status: 'error' };
  }

  if (
    parseFloat(amount) > parseFloat(accountInformation[accountFromIndex].amount)
  ) {
    return { message: 'Insufficient funds', status: 'error' };
  }

  addTransaction(accountFromIndex, accountToIndex, amount, description);
  return { message: `Transaction successful. Id: ${Date.now()}`, status: 'ok' };
};
