import styled from 'styled-components';

const Table = styled.div`
  display: grid;
  color: ${props => props.theme.colors.primary};
  position: relative;
`;

export const Header = styled(Table)`
  grid-template-columns: ${props => props.columns || 'inherit'};
  background: ${props => props.theme.colors.black};
  height: 2em;
  user-select: none;
  padding-left: 1em;

  div {
    transform: translateY(20%);
  }
`;

export const Body = styled.div``;
export const Row = styled(Table)`
  grid-template-columns: ${props => props.columns || 'inherit'};
  height: 2em;
  font-size: 0.8em;
`;

export const RowWithBorderBottom = styled(Row)`
  border-bottom: 0.1px solid ${props => props.theme.colors.darkgray2};
  div {
    transform: translateY(20%);
    padding-left: 1em;
  }

  div:nth-child(5) {
    text-align: right;
    padding-right: 1em;
  }
`;

export default Table;
