import styled from 'styled-components';

const Input = styled.input`
  height: 30px;
  color: ${props => props.color || props.theme.colors.darkgray};
  cursor: pointer;
  border-radius: ${props => props.theme.border.radious};
  outline: none;
  width: 100%;
  border: 1px solid black;
  font-size: 1.4em;
  box-sizing: border-box;
  -webkit-appearance: none;
  padding: 0.3em;
`;

export default Input;
