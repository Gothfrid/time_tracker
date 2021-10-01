"use strict";

import { IUserTask, TTaskReducer } from "./taskUtils";



export const TYPE = {
  INIT: "task/INIT",
  ADD: "task/ADD",
  REMOVE: "task/REMOVE",
  EDIT: "task/EDIT"
}


export const app_task_add = ({ user_id, user_name, hours, note, minutes }: IUserTask) => ({
  type: TYPE.ADD,
  payload: {
    user_id, user_name, hours, note, minutes
  }
})

export const app_task_edit = ({ id, user_id, user_name, hours, note, minutes }: IUserTask) => ({
  type: TYPE.EDIT,
  payload: {
    id, user_id, user_name, hours, note
  }
})

export const app_task_remove = ({ id }: { id: number }) => ({
  type: TYPE.REMOVE,
  payload: id,
})


export const app_tasks_init = (tasks: TTaskReducer) => ({
  type: TYPE.INIT,
  payload: tasks
})