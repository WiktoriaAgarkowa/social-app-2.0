import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from "redux-saga";
import rootSage from "./root-saga";
import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSage);

export default store;