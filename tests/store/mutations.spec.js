import mutations from '../../src/store/mutations';

// eslint-disable-next-line no-undef
describe('mutations', () => {
  // eslint-disable-next-line no-undef
  test('addTodo', () => {
    let state = {
      todos: [],
    };
    const payload = {
      text: 'new todo',
    };

    mutations.addTodo(state, payload);
    expect(state).toEqual({
      todos: [{ isCompleted: false, text: 'new todo' }],
    });
  });

  test('deleteTodo', () => {});

  test('completeTodo', () => {});

  test('editTodo', () => {});
});
