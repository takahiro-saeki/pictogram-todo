import React from 'react';
import { v4 } from 'uuid';

const SelectField = ({ data, select, selectValue }) => (
  <select onChange={e => selectValue(e.target.value)} value={select}>
    >
    {data.map(item => (
      <option value={item.type} key={v4()}>
        {item.title}
      </option>
    ))}
  </select>
);

export default SelectField;
