import Table, { Header, Body, RowWithBorderBottom } from '../atoms/table';

const alignmentStyle = alignment => {
  if (alignment !== '') {
    return {
      textAlign: alignment,
    };
  }

  return {
    textAlign: 'inherit',
  };
};

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
        <div key={i} style={alignmentStyle(label.alignment)}>
          {label.name}
        </div>
      ))}
    </Header>
    <Body data-cy={dataCyBody}>
      {list.map((el, i) => (
        <RowWithBorderBottom key={i} columns={`${'0.1fr'} ${columns}`}>
          <div>{i + 1}</div>
          {listObjAttrs.map(attr => (
            <div style={alignmentStyle(attr.alignment)}>{el[attr.name]}</div>
          ))}
        </RowWithBorderBottom>
      ))}
    </Body>
  </Table>
);

export default GridTable;
