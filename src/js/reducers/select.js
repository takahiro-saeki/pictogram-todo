const select = (state = 'all', action) => {
  switch (action.type) {
    case 'SELECT_VALUE': {
      return action.payload.value;
    }
    default:
      return state;
  }
};

export default select;
