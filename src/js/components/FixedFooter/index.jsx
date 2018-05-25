import React from 'react';
import SelectField from 'components/SelectField';
import selectData from 'baseSetting/selectField';
import { Footer, Field, FooterWrap, OpenModalArea } from './style';

const selectStyle = {
  width: '100%',
  height: '100%',
  border: 'none',
  outline: 0
};

type Props = {
  select: string,
  selectValue: Function,
  toggleModal: Function
};

const FixedFooter = ({ select, selectValue, toggleModal }: Props) => (
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
