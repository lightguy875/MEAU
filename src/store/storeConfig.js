import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import {reducer} from './reducers/rootreducer'
// import rootSaga from './middlewares/rootsaga'
import rootSaga from './middlewares/rootsaga'
import  createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export {store};
