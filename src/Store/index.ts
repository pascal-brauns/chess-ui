import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import history from './History';
import Reducer from './Reducer';
import Saga from './Saga';

const sagaMiddleware = createSagaMiddleware();

const enhance = composeWithDevTools(
  applyMiddleware(sagaMiddleware, routerMiddleware(history))
);

const store = createStore(Reducer, enhance);

sagaMiddleware.run(Saga);

export default store;