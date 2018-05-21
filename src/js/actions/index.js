export const AddMemo = memo => ({
  type: 'ADD_MEMO',
  payload: {
    memo
  }
});

export const toggleModal = () => ({
  type: 'TOGGLE_MODAL'
});
