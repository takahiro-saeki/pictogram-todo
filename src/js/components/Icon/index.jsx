import React from 'react';

const Icon = ({ name, style, onClick }) => (
  <i className="material-icons" style={style} onClick={onClick}>
    {name}
  </i>
);

export default Icon;
