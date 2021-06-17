import styled from 'styled-components';

const Container = styled.div`
  margin: ${props => props.margin || '0 auto'};
  margin-top: ${props => props.marginTop || props.theme.containers.margin};
  text-align: ${props => props.align || 'inherit'};
  width: 100%;
  width: ${props => props.width || '100%'};
`;

export const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: ${props => props.columns};
  gap: 10%;
  height: ${props => props.height};
`;

export default Container;
