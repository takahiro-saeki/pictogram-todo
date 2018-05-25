import React from 'react';
import RaisedButton from 'components/RaisedButton';
import SelectField from 'components/SelectField';
import selectData from 'baseSetting/selectField';
import { Footer, Field, FooterWrap } from './style';

const selectStyle = {
  width: '100%',
  height: '100%',
  borderRadius: 0
};

const FixedFooter = ({ select, selectValue }) => (
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
        <RaisedButton text="TODOを作成する" />
      </Field>
    </Footer>
  </FooterWrap>
);

export default FixedFooter;
