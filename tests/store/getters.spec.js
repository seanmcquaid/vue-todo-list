import getters from '../../src/store/getters';

describe('getters', () => {
  it('getTodoById', () => {
    const state = { todos: [{ isCompleted: false, text: 'todo' }] };
    const id = 0;
    expect(getters.getTodoById(state, id)).toEqual({
      isCompleted: false,
      text: 'todo',
    });
  });
});
