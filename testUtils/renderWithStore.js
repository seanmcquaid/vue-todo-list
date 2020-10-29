import { render } from '@testing-library/vue';
import store from '../src/store';

const renderWithStore = (Component, customStore) => {
  render(Component, {
    store: {
      ...store,
      ...customStore,
    },
  });
};

export default renderWithStore;
