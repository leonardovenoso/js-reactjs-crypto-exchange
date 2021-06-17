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
  align-items: center;

  div {
    padding-left: 1em;
    padding-right: 0.3em;
  }

  div:last-child {
    padding-right: 1em;
  }
`;

export const Body = styled.div``;
export const Row = styled(Table)`
  grid-template-columns: ${props => props.columns || 'inherit'};
  height: 2em;
  font-size: 0.8em;
  text-align: ${props => props.align || 'inherit'};
`;

export const RowWithBorderBottom = styled(Row)`
  display: grid;
  align-items: center;
  border-bottom: 0.1em solid ${props => props.theme.colors.darkgray2};

  div {
    box-sizing: border-box;
    padding-left: 1em;
  }

  div:last-child {
    box-sizing: border-box;
    padding-right: 1em;
  }
`;

export default Table;
