import React from 'react';
import WaveButton from './style';

const RaisedButton = ({ onClick, text, style }) => (
  <WaveButton type="button" onClick={onClick} style={style}>
    {text}
  </WaveButton>
);

RaisedButton.defaultProps = {
  onClick: null
};

export default RaisedButton;
