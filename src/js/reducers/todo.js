const todo = (state = [], action) => {
  switch (action.type) {
    case 'SUBMIT_TODO': {
      return [...state, {}];
    }
  }
  return state;
};

export default todo;
