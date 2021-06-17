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

const format = (str, type) => {
  if (type === 'timestamp') {
    const dt = new Date(str);
    return `${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt
      .getDate()
      .toString()
      .padStart(2, '0')}/${dt.getFullYear().toString().padStart(4, '0')} ${dt
      .getHours()
      .toString()
      .padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}`;
  }
  if (type === 'int') {
    return parseInt(str, 10);
  }

  return str;
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
          {listObjAttrs.map((attr, n) => (
            <div key={n} style={alignmentStyle(attr.alignment)}>
              {format(el[attr.name], attr.type)}
            </div>
          ))}
        </RowWithBorderBottom>
      ))}
    </Body>
  </Table>
);

export default GridTable;
