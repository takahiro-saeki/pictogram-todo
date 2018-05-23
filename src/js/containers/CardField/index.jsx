import React from 'react';
import { v4 } from 'uuid';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import mock from 'mock';
import Card from 'components/Card';

const CardField = ({ data }) => (
  <Grid>
    <Row>
      {data.map(item => (
        <Col key={v4()} xs={12} sm={6} md={4}>
          <Card memo={item.memo} />
        </Col>
      ))}
    </Row>
  </Grid>
);

export default CardField;
