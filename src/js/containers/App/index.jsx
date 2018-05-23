import React from 'react';
import CardField from 'containers/CardField';
import Header from 'components/Header';
import Modal from 'components/Modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'actions';

const App = ({
  toggle,
  toggleModal,
  todo,
  submitTodo,
  deleteTodo,
  editTodo
}) => (
  <div onClick={() => console.log('toggle', toggle)}>
    <Header />
    <CardField data={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
    <Modal isOpen={toggle} closeModal={toggleModal} submitTodo={submitTodo} />
  </div>
);

const mapStateToProps = state => ({
  toggle: state.modal,
  todo: state.todo
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
