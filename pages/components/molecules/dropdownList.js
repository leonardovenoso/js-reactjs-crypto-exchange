import Select from '../atoms/select';

const DropdownList = ({
  defaultLabel = 'Select',
  defaultValue = '0',
  list = [],
  listKeyLabel = '',
  listKeyValue = '',
  optionLabelFn = (el = 'No options') => el,
  onChangeFn = () => '',
  cyDataSelector = 'dropdownlist',
  block = false,
}) => (
  <Select
    defaultValue={{ label: defaultLabel, value: defaultValue }}
    data-cy={cyDataSelector}
    onChange={evt => onChangeFn(evt.target.value)}
    disabled={block ? true : null}
  >
    <option value={defaultValue}>{defaultLabel}</option>
    {list.map(el => (
      <option key={el[listKeyLabel]} value={el[listKeyValue]}>
        {optionLabelFn(el)}
      </option>
    ))}
  </Select>
);

export default DropdownList;
