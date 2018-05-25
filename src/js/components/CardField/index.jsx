// @flow

import React from 'react';
import { v4 } from 'uuid';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import Card from 'components/Card';
import NoData from './style';

type Props = {
  data: Array<Object>,
  deleteTodo: Function,
  editTodo: Function,
  toggleCheck: Function,
  changeCheckbox: Function
};

const CardField = ({
  data,
  deleteTodo,
  editTodo,
  toggleCheck,
  changeCheckbox
}: Props) => (
  <Grid fluid>
    {data.length ? (
      <Row>
        {data.map(item => (
          <Col key={v4()} xs={12} sm={6} md={4}>
            <Card
              memo={item}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleCheck={toggleCheck}
              changeCheckbox={changeCheckbox}
            />
          </Col>
        ))}
      </Row>
    ) : (
      <NoData>まだデータはありません。</NoData>
    )}
  </Grid>
);

CardField.defaultProps = {
  data: [],
  deleteTodo: null,
  editTodo: null,
  toggleCheck: null,
  changeCheckbox: null
};

export default CardField;
