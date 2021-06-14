import styled from 'styled-components';

const Title = styled.div`
  font-size: ${props => props.size || props.theme.fontSize.title};
  width: 100%;
  text-align: center;
  user-select: none;
  color: ${props => props.theme.colors.primary};
`;

export default Title;
