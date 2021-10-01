"use strict"

import { combineReducers } from 'redux-immutable';

import appReducer from './app/appReducer';
import { APP_REDUCER_NAME } from './app/appUtils';

import taskReducer from './tasks/taskReducer';
import { TASK_REDUCER_NAME } from './tasks/taskUtils';




const rootReducer = () => combineReducers({
  [TASK_REDUCER_NAME]: taskReducer,
  [APP_REDUCER_NAME]: appReducer
});


export default rootReducer;

