import React from 'react';

const RaisedButton = ({ onClick }) => (
  <button onClick={onClick}>make memo</button>
);

RaisedButton.defaultProps = {
  onClick: null
};

export default RaisedButton;
