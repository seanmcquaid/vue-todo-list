import { fireEvent, screen } from '@testing-library/vue';
import Home from '../../src/views/Home.vue';
import renderWithStore from '../../testUtils/renderWithStore';
import '@testing-library/jest-dom/extend-expect';

describe('Home', () => {
  test('textInputOnChange', () => {
    renderWithStore(Home, {
      todos: [],
    });

    fireEvent.update(screen.getByTestId('inputText'), 'Update');

    expect(screen.getByTestId('inputText').value).toEqual('Update');

    fireEvent.click(screen.getByText('Add'));

    expect(screen.getByTestId('inputText').value).toEqual('Update');
  });

  test('submitNewTodo', () => {
    renderWithStore(Home, {
      todos: [],
    });

    fireEvent.update(screen.getByTestId('inputText'), 'Update');
    expect(screen.getByTestId('inputText').value).toEqual('Update');

    fireEvent.click(screen.getByText('Add'));

    expect(screen.getByText('Update')).toBeInTheDocument();
    expect(screen.getByTestId('inputText').value).toEqual('');
  });
});
