import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'actions';
import RaisedButton from 'components/RaisedButton';
import SelectField from 'components/SelectField';
import selectData from 'baseSetting/selectField';
import { HeaderContainer, TitleContainer, HeaderMaxWidth } from './style';

const btnStyle = {
  width: '220px'
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
      <RaisedButton
        onClick={toggleModal}
        text="TODOを作成する"
        style={btnStyle}
      />
    </HeaderMaxWidth>
  </HeaderContainer>
);

const mapStateToProps = state => ({
  toggle: state.toggle
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
