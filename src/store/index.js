// src/store/index.js


import { createStore, combineReducers } from 'redux';
import categoryReducer from '../reducers';

const rootReducer = combineReducers({
    categories: categoryReducer,
});

const store = createStore(rootReducer);

export default store;