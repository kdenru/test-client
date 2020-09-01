import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import userReducer, { TStore } from './userReducer';

const configureStore = (preloadedState: TStore): Store =>
  createStore(
    userReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );

export default configureStore;
