import React from 'react';
import EnvContainer from './style';

type Props = {
  children: React.Node,
  style: {}
};

const EnvHelper = ({ children, style }: Props) => (
  <EnvContainer style={style}>{children}</EnvContainer>
);

EnvHelper.defaultProps = {
  children: null,
  style: {}
};

export default EnvHelper;
