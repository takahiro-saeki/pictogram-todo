import React from 'react';
import Icon from 'components/Icon';
import { Container, IconWrapper, TextWrap } from './style';

const iconStyle = {
  color: 'red',
  borderRadius: '50%',
  border: '1px solid red'
};

const Card = ({ memo, deleteTodo }) => (
  <Container>
    <IconWrapper>
      <Icon name="check" />
    </IconWrapper>
    <TextWrap>{memo.memo}</TextWrap>
    <IconWrapper>
      <Icon
        name="close"
        style={iconStyle}
        onClick={() => deleteTodo(memo.id)}
      />
    </IconWrapper>
  </Container>
);

export default Card;
