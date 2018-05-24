import React from 'react';
import WaveButton from './style';

const RaisedButton = ({ onClick }) => (
  <WaveButton onClick={onClick}>make memo</WaveButton>
);

RaisedButton.defaultProps = {
  onClick: null
};

export default RaisedButton;
