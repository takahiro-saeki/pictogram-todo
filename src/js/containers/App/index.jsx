import React from 'react';
import CardField from 'containers/CardField';
import Header from 'components/Header';
import Modal from 'components/Modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import selectors from 'selectors';
import * as actions from 'actions';

const App = ({
  toggle,
  toggleModal,
  todo,
  submitTodo,
  deleteTodo,
  editTodo,
  toggleCheck,
  select,
  selectValue
}) => (
  <div>
    <Header select={select} selectValue={selectValue} />
    <CardField
      data={todo}
      deleteTodo={deleteTodo}
      editTodo={editTodo}
      toggleCheck={toggleCheck}
    />
    <Modal isOpen={toggle} closeModal={toggleModal} submitTodo={submitTodo} />
  </div>
);

const mapStateToProps = state => ({
  toggle: state.modal,
  todo: selectors(state),
  select: state.select
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
