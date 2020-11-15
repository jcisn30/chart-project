import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index.js';
import rootSaga from './saga/index';

//create saga middleware
const sagaMiddleware = createSagaMiddleware();

//create store, inject saga middleware, redux devtools
const store = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension && window.devToolsExtension(),
)(createStore)(rootReducer);

//run root saga
sagaMiddleware.run(rootSaga);

export default store;