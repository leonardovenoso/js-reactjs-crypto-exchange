import styled from 'styled-components';

const Select = styled.select`
  height: 30px;
  color: ${props => props.theme.colors.darkgray};
  cursor: pointer;
  border-radius: ${props => props.theme.border.radious};
  outline: none;
  width: ${props => props.width || '100%'};
  border: 1px solid black;
  box-sizing: border-box;
  -webkit-appearance: none;
  padding-left: 0.3em;
`;

export default Select;
