import { v4 } from 'uuid';
import storage from 'domain/storage';

const todo = (state = [], action) => {
  switch (action.type) {
    case 'SUBMIT_TODO': {
      const { memo } = action.payload;
      const addTodo = [
        ...state,
        {
          id: v4(),
          memo,
          date: '',
          finishDate: '',
          isChecked: false
        }
      ];
      storage.store(addTodo);
      return addTodo;
    }
    case 'DELETE_TODO': {
      const { id } = action.payload;
      return state.filter(item => id !== item.id);
    }
  }
  return state;
};

export default todo;
