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
  editTodo({ commit }, { todo, index }) {
    commit('editTodo', { updatedTodo: todo, id: index });
  },
};

export default actions;
