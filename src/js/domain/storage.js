const storage = {
  store: data => localStorage.setItem('todo-data', JSON.stringify(data)),
  read: () => JSON.parse(localStorage.getItem('todo-data'))
};

export default storage;
