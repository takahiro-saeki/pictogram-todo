import React from 'react';
import { v4 } from 'uuid';
import mock from 'mock';
import Card from 'components/Card';

const CardField = () => (
  <div>{mock.map(item => <Card memo={item.memo} key={v4()} />)}</div>
);

export default CardField;
