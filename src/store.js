import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';
import { createLogger } from 'redux-logger';
import {thunk}  from 'redux-thunk';

// Create logger middleware
const logger = createLogger();

// Combine reducers
const rootReducer = combineReducers({
  searchRobots,
  requestRobots
});

// Create store with middleware applied
export const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

//console.log(store.getState());
/*import { createStore,applyMiddleware,combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers.js';
import { createLogger } from 'redux-logger'; 
import {thunk}  from 'redux-thunk';

const logger= createLogger();
const rootReducer=combineReducers({searchRobots,requestRobots});
export const store = createStore(rootReducer,searchRobots,applyMiddleware(thunk, logger));

console.log(store.getState());*/
/*import { configureStore } from '@reduxjs/toolkit';
import searchRobots from './reducers.js';
export const store = configureStore({
  reducer: {
    searchRobots,
  },
});*/
//If you have multiple reducers and need to combine them:
/*import { createStore, combineReducers } from 'redux';
import searchRobots from './reducers.js';

const rootReducer = combineReducers({
  search: searchRobots,
  // add other reducers here
});

export const store = createStore(rootReducer);*/

