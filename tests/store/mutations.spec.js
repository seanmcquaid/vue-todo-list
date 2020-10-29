import mutations from '../../src/store/mutations';

// eslint-disable-next-line no-undef
describe('mutations', () => {
  // eslint-disable-next-line no-undef
  test('addTodo', () => {
    const state = {
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

  test('deleteTodo', () => {
    const state = {
      todos: [{ isCompleted: false, text: 'new todo' }],
    };
    const payload = {
      id: 0,
    };

    mutations.deleteTodo(state, payload);
    expect(state).toEqual({
      todos: [],
    });
  });

  test('completeTodo', () => {
    const state = {
      todos: [{ isCompleted: false, text: 'new todo' }],
    };
    const payload = {
      id: 0,
    };

    mutations.completeTodo(state, payload);
    expect(state).toEqual({
      todos: [{ isCompleted: true, text: 'new todo' }],
    });
  });

  test('editTodo', () => {
    const state = {
      todos: [{ isCompleted: false, text: 'new todo' }],
    };
    const payload = {
      id: 0,
      updatedTodo: {
        text: 'updated todo',
        isCompleted: false,
      },
    };

    mutations.editTodo(state, payload);
    expect(state).toEqual({
      todos: [
        {
          text: 'updated todo',
          isCompleted: false,
        },
      ],
    });
  });
});
