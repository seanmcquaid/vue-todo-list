const actions = {
  addTodo({ commit }, todo) {
    commit('addTodo', todo);
  },
  deleteTodo({ commit }, index) {
    commit('deleteTodo', { id: index });
  },
  completeTodo({ commit }, index) {
    commit('completeTodo', { id: index });
  },
};

export default actions;
