import { accountInformation } from './data';

const fetchAccountInformation = async () =>
  Promise.resolve({ json: () => Promise.resolve(accountInformation) });

export default fetchAccountInformation;
