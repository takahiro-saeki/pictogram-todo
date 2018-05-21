import React from 'react';
import RaisedButton from 'components/RaisedButton';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'actions';
import HeaderContainer from './style';

const Header = ({ toggleModal }) => (
  <HeaderContainer>
    <div>test</div>
    <RaisedButton onClick={toggleModal} />
  </HeaderContainer>
);

const mapStateToProps = state => ({
  toggle: state.toggle
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
