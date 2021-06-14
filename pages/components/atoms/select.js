import styled from 'styled-components';

const Select = styled.select`
  height: 3em;
  color: ${props => props.theme.colors.darkgray};
  cursor: pointer;
  border-radius: 0 0.3em;
  outline: none;
`;

export default Select;
