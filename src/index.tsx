import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import configureStore from './store/configureStore';

const preloadedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const store = configureStore(preloadedState);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
