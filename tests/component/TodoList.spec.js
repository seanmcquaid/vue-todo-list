import { fireEvent, screen } from '@testing-library/vue';
import TodoList from '../../src/components/app/Home/TodoList.vue';
import renderWithStore from '../../testUtils/renderWithStore';
import '@testing-library/jest-dom/extend-expect';

describe('TodoList', () => {
  test('Delete Todo', () => {
    renderWithStore(TodoList, {
      todos: [{ text: 'currentTodo', isCompleted: false }],
    });

    expect(screen.getByText('currentTodo')).toBeInTheDocument();

    fireEvent.click(screen.getByText('delete'));

    expect(screen.queryByText('currentTodo')).toBeNull();
  });

  test('Complete Todo', () => {
    renderWithStore(TodoList, {
      todos: [{ text: 'currentTodo', isCompleted: false }],
    });

    expect(screen.getByText('currentTodo')).toBeInTheDocument();
    expect(screen.getByText('currentTodo')).not.toHaveClass('isCompleted');

    fireEvent.click(screen.getByText('currentTodo'));
    expect(screen.getByText('currentTodo')).toHaveClass('isCompleted');
  });
});
