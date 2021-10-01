"use strict";

import { AnyAction } from 'redux';

import {
  call,
  select,
  takeEvery
} from 'redux-saga/effects';


import { logInfo } from '../utils/logging_utils';

import { IS_DEV_MODE_ENABLED } from '../utils/utilities';


function* logAction(action: AnyAction) {
  const state = yield select()
  if (IS_DEV_MODE_ENABLED) {
    yield call(logInfo, 'Dispatching: ', action);
    yield call(logInfo, 'State after:', state.toJS());
  }
}



export function* loggerSagaWatcher() {
  yield takeEvery('*', logAction)
}
