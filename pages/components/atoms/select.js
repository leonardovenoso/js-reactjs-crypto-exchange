import styled from 'styled-components';

const Select = styled.select`
  height: 3em;
  color: ${props => props.theme.colors.darkgray};
  cursor: pointer;
  border-radius: ${props => props.theme.border.radious};
  outline: none;
`;

export default Select;
