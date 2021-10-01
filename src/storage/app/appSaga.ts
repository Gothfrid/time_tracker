"use strict";

import { takeLatest, call, put } from "@redux-saga/core/effects";
import { fromJS } from "immutable";

import { TYPE } from "./appActions";
import { app_tasks_init } from "../tasks/tasksActions";

import { TTaskReducer } from "../tasks/taskUtils";
import { loadData } from "../../utils/utilities";


function* initSaga({ payload }: { payload: string }) {
  const loaded = yield call(loadData, payload);
  if (loaded !== undefined) {
    yield put(app_tasks_init(fromJS(loaded) as TTaskReducer))
  }
}

export function* appSagasWatger() {
  yield takeLatest(TYPE.LOGIN, initSaga)
}