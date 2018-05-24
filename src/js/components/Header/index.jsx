import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'actions';
import RaisedButton from 'components/RaisedButton';
import SelectField from 'components/SelectField';
import selectData from 'baseSetting/selectField';
import HeaderContainer from './style';

const Header = ({ toggleModal, select, selectValue }) => (
  <HeaderContainer>
    <div>test</div>
    <RaisedButton onClick={toggleModal} />
    <SelectField data={selectData} select={select} selectValue={selectValue} />
  </HeaderContainer>
);

const mapStateToProps = state => ({
  toggle: state.toggle
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
