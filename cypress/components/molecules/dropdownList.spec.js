import { ThemeProvider } from 'styled-components';
import { mount } from '@cypress/react';
import { darkTheme } from '../../../theme';
import DropdownList from '../../../components/molecules/dropdownList';

describe('DropdownList', () => {
  describe('when select has default values', () => {
    beforeEach(() => {
      mount(
        <ThemeProvider theme={darkTheme}>
          <DropdownList />
        </ThemeProvider>
      );
    });

    it('shows a dropdown list', () => {
      cy.get('[data-cy=dropdownlist]');
    });

    it('shows Select as default label', () => {
      cy.get('[data-cy=dropdownlist]').find(':selected').contains('Select');
    });

    it('shows Select as default value', () => {
      expect(
        cy
          .get('[data-cy=dropdownlist]')
          .find(':selected')
          .invoke('val')
          .should('eq', '0')
      );
    });
  });
});
