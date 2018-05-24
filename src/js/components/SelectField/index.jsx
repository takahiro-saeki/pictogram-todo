import React from 'react';
import { v4 } from 'uuid';
import Select from './style';

const SelectField = ({ data, select, selectValue }) => (
  <Select onChange={e => selectValue(e.target.value)} value={select}>
    {data.map(item => (
      <option value={item.value} key={v4()}>
        {item.label}
      </option>
    ))}
  </Select>
);

export default SelectField;
