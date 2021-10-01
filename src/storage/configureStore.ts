"use strict"

import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';

import 'babel-polyfill';

import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';


/**
 * Create saga middleware with socket and ajax instances provided to context
 */
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

function initStore() {
  const generated_store = process.env.NODE_ENV === 'production' ? configureStoreProd() : configureStoreDev();
  sagaMiddleware.run(rootSaga);
  return generated_store;
}

function configureStoreProd() {
  const store = createStore(
    rootReducer(),
    compose(
      applyMiddleware(
        ...middlewares
      )
    )
  );
  return store;
}

function configureStoreDev() {
  const store = createStore(
    rootReducer(),
    composeWithDevTools(
      applyMiddleware(
        ...middlewares
      )
    )
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      const nextReducer = require('./rootReducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer());
    });
  }
  return store;
}


export const store = initStore()


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch