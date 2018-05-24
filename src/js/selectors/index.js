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
      case 'new_todo':
        return todos.sort((a, b) => b.date - a.date);
      case 'old_todo':
        return todos.sort((a, b) => a.date - b.date);
    }
  }
);

export default getVisibleTodos;
