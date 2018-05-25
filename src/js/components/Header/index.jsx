// @flow

import React from 'react';
import RaisedButton from 'components/RaisedButton';
import SelectField from 'components/SelectField';
import EnvHelper from 'components/EnvHelper';
import selectData from 'baseSetting/selectField';
import { HeaderContainer, TitleContainer, HeaderMaxWidth } from './style';

const btnStyle = {
  width: '180px'
};

type Props = {
  toggleModal: Function,
  select: string,
  selectValue: Function,
  title: string
};

const Header = ({ toggleModal, select, selectValue, title }: Props) => (
  <HeaderContainer>
    <HeaderMaxWidth>
      <EnvHelper>
        <SelectField
          data={selectData}
          select={select}
          selectValue={selectValue}
        />
      </EnvHelper>
      <TitleContainer>{title}</TitleContainer>
      <EnvHelper>
        <RaisedButton
          onClick={toggleModal}
          text="TODOを作成する"
          style={btnStyle}
        />
      </EnvHelper>
    </HeaderMaxWidth>
  </HeaderContainer>
);

export default Header;
