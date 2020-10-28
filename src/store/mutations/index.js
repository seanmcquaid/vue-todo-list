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
    state.todos = state.todos.filter((todo, i) => i !== payload.id);
  },
  completeTodo(state, payload) {
    state.todos[payload.id].isCompleted = !state.todos[payload.id].isCompleted;
  },
};

export default mutations;
