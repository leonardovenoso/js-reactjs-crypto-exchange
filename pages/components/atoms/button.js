import styled from 'styled-components';

const Button = styled.button`
  height: 3em;
  cursor: pointer;
  background: ${props => props.theme.colors.secondary};
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 0 0.3em;

  &:hover {
    font-weight: bold;
  }
`;

export default Button;
