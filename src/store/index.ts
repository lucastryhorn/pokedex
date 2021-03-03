import { createStore, applyMiddleware, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Immutable from 'seamless-immutable';

import reducers from './reducers';
import rootSaga from './sagas';

const bindMiddleware = (middleware: Array<Middleware>) => {
  const middlewares = middleware;
  if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
  }

  return applyMiddleware(...middlewares);
};

const initializedStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = {
    ...createStore(reducers, Immutable({}), bindMiddleware([sagaMiddleware])),
    sagaTask: sagaMiddleware.run(rootSaga),
  };
  return store;
};

export default initializedStore();
