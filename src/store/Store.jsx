import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'
import LoginReducer from '../reducer/LoginReducer';
import logger from 'redux-logger';
import productReducer from '../reducer/productReducer';

const combinereducer = combineReducers({LoginReducer, productReducer})

let store = createStore(combinereducer, applyMiddleware(logger));

export default store;