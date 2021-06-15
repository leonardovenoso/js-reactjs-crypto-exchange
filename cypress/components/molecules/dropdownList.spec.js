import { mount } from '@cypress/react';
import DropdownList from '../../../pages/components/molecules/dropdownList';

describe('DropdownList', () => {
  describe('when select has default values', () => {
    beforeEach(() => {
      mount(<DropdownList />);
    });

    it('shows a Select HTMLElement', () => {
      cy.get('[data-cy=dropdownlist]');
    });

    it('shows Select as default label', () => {
      expect(cy.get('[data-cy=dropdownlist] option').invoke('text')).eq(
        'Select'
      );
    });

    it('shows Select as default value', () => {
      expect(cy.get('[data-cy=dropdownlist] option').invoke('value')).eq('0');
    });
  });
});
