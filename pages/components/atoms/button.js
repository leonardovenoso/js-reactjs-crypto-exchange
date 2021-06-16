import styled from 'styled-components';

const Button = styled.button`
  height: 3em;
  cursor: pointer;
  background: ${props => props.theme.colors.secondary};
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: ${props => props.theme.border.radious};

  &:hover {
    font-weight: bold;
  }
`;

export default Button;
