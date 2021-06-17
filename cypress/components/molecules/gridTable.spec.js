import { ThemeProvider } from 'styled-components';
import { mount } from '@cypress/react';
import { darkTheme } from '../../../theme';
import GridTable from '../../../components/molecules/gridTable';
import { accountInformation } from '../../../services/data';

describe('GridTable molecule', () => {
  describe('when correct parameter', () => {
    beforeEach(() => {
      mount(
        <ThemeProvider theme={darkTheme}>
          <GridTable
            columns="1fr 1fr 1fr 0.3fr 0.2fr"
            columnLabels={[
              'Time',
              'Action',
              'Description',
              'Currency',
              'Amount',
            ]}
            dataCyHeader="transactions-header"
            dataCyBody="transactions-body"
            list={
              accountInformation.find(
                account => account.accountNumber === '13311110000'
              ).transactions
            }
            listObjAttrs={[
              'timestamp',
              'action',
              'description',
              'currency',
              'amount',
            ]}
          />
        </ThemeProvider>
      );
    });

    it('renders a header with 6 cells, one of them is the row #id', () => {
      cy.get('[data-cy=transactions-header]')
        .children()
        .should('have.length', 6);
    });

    it('renders the body with 100 transactions', () => {
      cy.get('[data-cy=transactions-body]')
        .children()
        .should('have.length', 100);
    });
  });
});
