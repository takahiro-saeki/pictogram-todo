import { createSelector } from 'reselect';

const getVisibilityFilter = state => state.select;
const getTodos = state => state.todo;

const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'ALL':
        return todos;
      case 'ACTIVE':
        return todos.filter(t => !t.isChecked);
      case 'COMPLETED':
        return todos.filter(t => t.isChecked);
      case 'NEW_TODO':
        return todos.sort((a, b) => b.unix - a.unix);
      case 'OLD_TODO':
        return todos.sort((a, b) => a.unix - b.unix);
      case 'TODAY_TODO':
        return todos.filter(item => item.today);
    }
  }
);

export default getVisibleTodos;
