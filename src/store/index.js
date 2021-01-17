import { devToolsEnhancer } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import usersReducer from './users';

const reducer = combineReducers({
    users: usersReducer,
});

const store = configureStore({
    reducer,
});

export default store;
