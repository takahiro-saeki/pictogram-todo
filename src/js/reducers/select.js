// @flow

const select = (state: string = 'ALL', action: {}) => {
  switch (action.type) {
    case 'SELECT_VALUE': {
      return action.payload.value;
    }
    default:
      return state;
  }
};

export default select;
