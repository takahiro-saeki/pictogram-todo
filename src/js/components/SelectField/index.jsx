// @flow

import React from 'react';
import { v4 } from 'uuid';
import Select from './style';

type Props = {
  data: Array<Object>,
  select: string,
  selectValue: Function,
  style: {}
};

const SelectField = ({ data, select, selectValue, style }: Props) => (
  <Select
    onChange={e => selectValue(e.target.value)}
    value={select}
    style={style}
  >
    {data.map(item => (
      <option value={item.value} key={v4()}>
        {item.label}
      </option>
    ))}
  </Select>
);

SelectField.defaultProps = {
  data: [],
  select: '',
  selectValue: null,
  style: {}
};

export default SelectField;
