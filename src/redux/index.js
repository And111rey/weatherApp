import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  weatherReducer,
});

const composedEnhancer = applyMiddleware(thunk);

const store = createStore(rootReducer, composedEnhancer);

export default store;
