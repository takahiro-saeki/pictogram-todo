import React from 'react';
import EnvContainer from './style';

const EnvHelper = ({ children, style }) => (
  <EnvContainer style={style}>{children}</EnvContainer>
);

export default EnvHelper;
