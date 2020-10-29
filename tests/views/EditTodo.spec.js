import { fireEvent, screen, waitFor } from '@testing-library/vue';
import App from '../../src/App.vue';
import { routes } from '../../src/router';
import renderWithStoreAndRouter from '../../testUtils/renderWithStoreAndRouter';
import '@testing-library/jest-dom/extend-expect';

describe('EditTodo', () => {
  test('getTodoById', () => {
    const state = {
      todos: [{ text: 'oldTodo', isCompleted: false }],
    };
    renderWithStoreAndRouter(App, routes, state, '/edit/0');

    expect(screen.getByText('oldTodo')).toBeInTheDocument();
  });

  test('submitEditedTodo', async () => {
    const state = {
      todos: [{ text: 'oldTodo', isCompleted: false }],
    };
    renderWithStoreAndRouter(App, routes, state, '/edit/0');

    fireEvent.update(screen.getByTestId('inputText'), 'Update todo');

    expect(screen.getByText('Update todo')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Submit Edit'));

    await waitFor(() =>
      expect(screen.getByText('Simple Todo List App')).toBeInTheDocument()
    );

    expect(screen.getByText('Update todo')).toBeInTheDocument();
  });

  test('textInputOnChange', () => {
    const state = {
      todos: [{ text: 'oldTodo', isCompleted: false }],
    };
    renderWithStoreAndRouter(App, routes, state, '/edit/0');

    fireEvent.update(screen.getByTestId('inputText'), 'Update todo');

    expect(screen.getByText('Update todo')).toBeInTheDocument();
  });
});
