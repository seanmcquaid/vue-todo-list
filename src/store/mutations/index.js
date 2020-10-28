const mutations = {
  addTodo(state, payload) {
    state.todos = [
      ...state.todos,
      {
        text: payload.text,
        isCompleted: false,
      },
    ];
  },
  deleteTodo(state, payload) {
    state.todos = state.todos.filter((todo, i) => i !== payload.index);
  },
  completeTodo(state, payload) {
    state.todos[payload.id].isCompleted = true;
  },
};

export default mutations;
