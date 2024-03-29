# Crypto Exchange UI
Cryto exchange implements a UI that access to a simulated backend API that manages
bank accounts.

URL: https://js-reactjs-crypto-exchange-cgapdmxap-leonardovenoso.vercel.app/

CodeSandbox: https://codesandbox.io/p/sandbox/inspiring-goldstine-8shge?file=%2Fcomponents%2Fmolecules%2Ftransfer.js%3A1%2C1


# Conventions
- UI = User interface component
- UT = Unit test
- IT = Integration test
- CT = Component test
- RF = Refactoring
- CF = Configurations

# Installation
Install NodeJs v12.16.1
Clone repository
Run command: npm run install
Run command: npm run dev

# Tests
Run unit and integration tests:
  1. Run dev webserver: npm run dev
  2. Run tests: npm run e2e

Run component tests:
npm run test-components-headless

Code coverage is run when the tests are run. Folder: .coverage/lcov-report/index.html

# Linter
npm run lint

# Browser compatibility
Chrome and Safari support
