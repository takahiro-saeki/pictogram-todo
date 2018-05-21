import React from 'react';
import CardField from 'containers/CardField';
import Header from 'components/Header';
import Modal from 'components/Modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'actions';

const App = ({ toggle, toggleModal }) => (
  <div onClick={() => console.log('toggle', toggle)}>
    <Header />
    <CardField />
    <Modal isOpen={toggle} closeModal={toggleModal} />
  </div>
);

const mapStateToProps = state => ({
  toggle: state.modal
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
