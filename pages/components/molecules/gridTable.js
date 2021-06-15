import Table, { Header, Body, RowWithBorderBottom } from '../atoms/table';

const GridTable = ({
  columns,
  columnLabels,
  dataCyHeader,
  dataCyBody,
  list,
  listObjAttrs,
}) => (
  <Table>
    <Header data-cy={dataCyHeader} columns={`${'0.1fr'} ${columns}`}>
      <div>#</div>
      {columnLabels.map((label, i) => (
        <div key={i}>{label}</div>
      ))}
    </Header>
    <Body data-cy={dataCyBody}>
      {list.map((el, i) => (
        <RowWithBorderBottom key={i} columns={`${'0.1fr'} ${columns}`}>
          <div>{i + 1}</div>
          {listObjAttrs.map(attr => (
            <div>{el[attr]}</div>
          ))}
        </RowWithBorderBottom>
      ))}
    </Body>
  </Table>
);

export default GridTable;
