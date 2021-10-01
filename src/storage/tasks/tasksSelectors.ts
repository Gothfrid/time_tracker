"use strict";

import { List, Map } from "immutable";
import { TASK_REDUCER_NAME } from "./taskUtils";


export const getTasks = (state: Map<string, any>) => state.get(TASK_REDUCER_NAME, List())


export const getTask = (id: number) => (state: Map<string, any>) => state.get(TASK_REDUCER_NAME).find((task) => task.get('id') === id
)
