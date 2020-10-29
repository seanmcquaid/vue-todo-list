import { fireEvent, screen } from '@testing-library/vue';
import Home from '../../src/views/Home.vue';
import renderWithStore from '../../testUtils/renderWithStore';

describe('Home', () => {
  test('textInputOnChange', () => {
    renderWithStore(Home, {
      todos: [],
    });

    fireEvent.update(screen.getByTestId('inputText'), 'Update');

    expect(screen.getByTestId('inputText').value).toEqual('Update');
  });

  test('submitNewTodo', () => {});
});
