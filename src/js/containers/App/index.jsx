import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'actions';
import selectors from 'selectors';
import CardField from 'components/CardField';
import Header from 'components/Header';
import Modal from 'components/Modal';
import FixedFooter from 'components/FixedFooter';

type Props = {
  toggle: boolean,
  toggleModal: Function,
  todo: Array<Object>,
  submitTodo: Function,
  deleteTodo: Function,
  editTodo: Function,
  toggleCheck: Function,
  select: string,
  selectValue: Function,
  changeCheckbox: Function
};

const App = ({
  toggle,
  toggleModal,
  todo,
  submitTodo,
  deleteTodo,
  editTodo,
  toggleCheck,
  select,
  selectValue,
  changeCheckbox
}: Props) => (
  <div>
    <Header
      select={select}
      selectValue={selectValue}
      title="pictogram todo"
      toggleModal={toggleModal}
    />
    <CardField
      data={todo}
      deleteTodo={deleteTodo}
      editTodo={editTodo}
      toggleCheck={toggleCheck}
      changeCheckbox={changeCheckbox}
    />
    <Modal isOpen={toggle} closeModal={toggleModal} submitTodo={submitTodo} />
    <FixedFooter
      select={select}
      selectValue={selectValue}
      toggleModal={toggleModal}
    />
  </div>
);

const mapStateToProps = state => ({
  toggle: state.modal,
  todo: selectors(state),
  select: state.select
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
