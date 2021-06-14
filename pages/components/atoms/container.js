import styled from 'styled-components';

const Container = styled.div`
  margin-top: ${props => props.margin || props.theme.containers.margin};
  text-align: ${props => props.align || 'inherit'};
  width: 100%;
`;

export const GridContainer = styled(Container)``;

export default Container;
