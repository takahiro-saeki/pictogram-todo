const select = (state = 'all', action) => {
  switch (action.type) {
    case 'SELECT_VALUE': {
      console.log('SELECT_VALUE', action.payload.value);
      return action.payload.value;
    }

    default:
      return state;
  }
};

export default select;
