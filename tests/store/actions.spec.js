import actions from '../../src/store/actions';

describe('actions', () => {
  test('addTodo', () => {
    const commit = jest.fn();
    const todo = { isCompleted: false, text: 'todo' };
    actions.addTodo({ commit }, todo);
    expect(commit).toHaveBeenCalledWith('addTodo', {
      isCompleted: false,
      text: 'todo',
    });
  });

  test('deleteTodo', () => {
    const commit = jest.fn();
    const index = 0;
    actions.deleteTodo({ commit }, index);
    expect(commit).toHaveBeenCalledWith('deleteTodo', {
      id: 0,
    });
  });

  test('completeTodo', () => {
    const commit = jest.fn();
    const index = 0;
    actions.completeTodo({ commit }, index);
    expect(commit).toHaveBeenCalledWith('completeTodo', {
      id: 0,
    });
  });

  test('editTodo', () => {
    const commit = jest.fn();
    const todo = { todo: { isCompleted: false, text: 'todo' }, index: 0 };
    actions.editTodo({ commit }, todo);
    expect(commit).toHaveBeenCalledWith('editTodo', {
      updatedTodo: { isCompleted: false, text: 'todo' },
      id: 0,
    });
  });
});
