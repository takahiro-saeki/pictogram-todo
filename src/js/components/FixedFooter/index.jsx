import React from 'react';
import RaisedButton from 'components/RaisedButton';
import SelectField from 'components/SelectField';
import selectData from 'baseSetting/selectField';
import { Footer, Field, FooterWrap, OpenModalArea } from './style';

const selectStyle = {
  width: '100%',
  height: '100%',
  border: 'none'
};

const FixedFooter = ({ select, selectValue, toggleModal }) => (
  <FooterWrap>
    <Footer>
      <Field>
        <SelectField
          data={selectData}
          select={select}
          selectValue={selectValue}
          style={selectStyle}
        />
      </Field>
      <Field>
        <OpenModalArea onClick={toggleModal}>TODOを作成する</OpenModalArea>
      </Field>
    </Footer>
  </FooterWrap>
);

export default FixedFooter;
