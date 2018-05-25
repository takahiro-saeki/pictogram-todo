// @flow

import React from 'react';
import WaveButton from './style';

type Props = {
  onClick: Function,
  text: string,
  style: {}
};

const RaisedButton = ({ onClick, text, style }: Props) => (
  <WaveButton type="button" onClick={onClick} style={style}>
    {text}
  </WaveButton>
);

RaisedButton.defaultProps = {
  onClick: null,
  text: '',
  style: {}
};

export default RaisedButton;
