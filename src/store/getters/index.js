const getters = {
  getTodoById: state => id => {
    return state.todos.find((todo, index) => index === id);
  },
};

export default getters;
