"use strict";

import { all, delay, spawn } from '@redux-saga/core/effects';
import { call } from 'redux-saga/effects';

import { loggerSagaWatcher } from './loggingSaga';

import { logError } from '../utils/logging_utils';
import { tasksSagasWatcher } from './tasks/tasksSaga';
import { appSagasWatger } from './app/appSaga';




const rootSagas = [
  tasksSagasWatcher,
  appSagasWatger,
  loggerSagaWatcher,
];

export default function* rootSaga() {
  yield all(rootSagas.map(saga =>
    spawn(function* () {
      let delay_inc = 1;
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          yield call(logError, 'Error occurred in one of root sagas, restarting: ', saga.name);
          yield call(logError, 'Error text: ', e);
        } finally {
          if (delay_inc > 200) {
            delay_inc = 10;
          }
          yield delay(1000 * delay_inc++); // Avoid infinite failures blocking app
        }
      }
    })
  ));

}



