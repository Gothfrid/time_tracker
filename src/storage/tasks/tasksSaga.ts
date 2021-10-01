"use strict";

import { select, takeEvery, call } from "@redux-saga/core/effects";
import { getTasks } from "./tasksSelectors";

import { TYPE } from "./tasksActions";
import { saveData } from "../../utils/utilities";
import { getUser } from "../app/appSelectors";

function* persistSaga() {
  const state = yield select(getTasks);
  const user = yield select(getUser);
  yield call(saveData, user, state);
}


export function* tasksSagasWatcher() {
  yield takeEvery([TYPE.ADD, TYPE.REMOVE, TYPE.EDIT], persistSaga)
}