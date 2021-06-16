
import { ThemeProvider } from 'styled-components';
import { mount } from '@cypress/react';
import { darkTheme } from '../../../pages/theme';
import Transfer from '../../../pages/components/molecules/transfer';

describe('Transfer', () => {
  describe('page elements', () => {
    beforeEach(() => {
      mount(
        <ThemeProvider theme={darkTheme}>
          <Transfer />
        </ThemeProvider>
      );
    });

    it('has a modal', () => {
      cy.get('[data-cy=transfer-modal]');
    });

    it('has a title', () => {
      cy.get('[data-cy=transfer-title]');
    });

    describe('transfer form', () => {
      it('has two dropdowns', () => {
        cy.get('[data-cy=transfer-dropdown-from]');
        cy.get('[data-cy=transfer-dropdown-to]');
      });

      it('has a transfer button', () => {
        cy.get('[data-cy=transfer-btn]');
      });
    });
  });
});
