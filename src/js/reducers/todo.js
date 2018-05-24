import { v4 } from 'uuid';
import storage from 'domain/storage';
import moment from 'moment';

const todo = (state = [], action) => {
  switch (action.type) {
    case 'SUBMIT_TODO': {
      const { memo } = action.payload;
      const addTodo = [
        ...state,
        {
          id: v4(),
          memo,
          date: moment().unix(),
          isChecked: false
        }
      ];
      storage.store(addTodo);
      return addTodo;
    }
    case 'DELETE_TODO': {
      const { id } = action.payload;
      const deleteTodo = state.filter(item => id !== item.id);
      storage.store(deleteTodo);
      return deleteTodo;
    }
    case 'EDIT_TODO': {
      const { id, memo } = action.payload;
      const editTodo = state.map(item => {
        if (id === item.id) {
          const edit = {
            ...item,
            memo
          };
          return edit;
        }
        return item;
      });
      storage.store(editTodo);
      return editTodo;
    }
    case 'TOGGLE_CHECK': {
      const { id } = action.payload;
      const toggleCheck = state.map(item => {
        if (id === item.id) {
          const check = {
            ...item,
            isChecked: !item.isChecked
          };
          return check;
        }
        return item;
      });
      storage.store(toggleCheck);
      return toggleCheck;
    }
  }
  return state;
};

export default todo;
