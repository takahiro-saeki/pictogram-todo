export const AddMemo = memo => ({
  type: 'ADD_MEMO',
  payload: {
    memo
  }
});

export const toggleModal = () => ({
  type: 'TOGGLE_MODAL'
});

export const submitTodo = memo => ({
  type: 'SUBMIT_TODO',
  payload: {
    memo
  }
});

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  payload: {
    id
  }
});
