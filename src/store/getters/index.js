const getters = {
  getTodoById: state => id => state.todos.find((todo, index) => index === id),
};

export default getters;
