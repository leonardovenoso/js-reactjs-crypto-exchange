import styled from 'styled-components';

const TextArea = styled.textarea.attrs({
  maxLength: '255',
})`
  height: 100px;
  color: ${props => props.color || props.theme.colors.darkgray};
  cursor: pointer;
  border-radius: ${props => props.theme.border.radious};
  outline: none;
  width: 100%;
  border: 1px solid black;
  box-sizing: border-box;
`;

export default TextArea;
