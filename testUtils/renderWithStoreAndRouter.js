import store from '../src/store';
import { render } from '@testing-library/vue';

const renderWithStoreAndRouter = (
  Component,
  routes,
  customStore,
  initialRoute
) => {
  render(
    Component,
    {
      routes,
      store: {
        ...store,
        ...customStore,
      },
    },
    (vue, store, router) => {
      router.push(initialRoute);
    }
  );
};

export default renderWithStoreAndRouter;
