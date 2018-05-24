// @flow

import React from 'react';
import RaisedButton from 'components/RaisedButton';
import SelectField from 'components/SelectField';
import selectData from 'baseSetting/selectField';
import { HeaderContainer, TitleContainer, HeaderMaxWidth } from './style';

const btnStyle = {
  width: '180px'
};

const Header = ({ toggleModal, select, selectValue, title }) => (
  <HeaderContainer>
    <HeaderMaxWidth>
      <SelectField
        data={selectData}
        select={select}
        selectValue={selectValue}
      />
      <TitleContainer>{title}</TitleContainer>
      <div>
        <RaisedButton
          onClick={toggleModal}
          text="TODOを作成する"
          style={btnStyle}
        />
      </div>
    </HeaderMaxWidth>
  </HeaderContainer>
);

export default Header;
