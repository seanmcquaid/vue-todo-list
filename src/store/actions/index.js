const actions = {
  addTodo({ commit }, todo) {
    commit('addTodo', todo);
  },
  deleteTodo({ commit }, index) {
    commit('deleteTodo', index);
  },
  completeTodo({ commit }, index) {
    commit('completeTodo', index);
  },
};

export default actions;
