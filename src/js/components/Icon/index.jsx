// @flow

import React from 'react';

type Props = {
  name: string,
  style: {},
  onClick: Function
};

const Icon = ({ name, style, onClick }: Props) => (
  <i className="material-icons" style={style} onClick={onClick}>
    {name}
  </i>
);

Icon.defaultProps = {
  name: '',
  style: {},
  onClick: null
};

export default Icon;
