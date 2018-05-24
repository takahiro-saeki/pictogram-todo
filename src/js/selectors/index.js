import { createSelector } from 'reselect';

const getVisibilityFilter = state => state.select;
const getTodos = state => state.todo;

const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter(t => !t.isChecked);
      case 'completed':
        return todos.filter(t => t.isChecked);
    }
  }
);

export default getVisibleTodos;
