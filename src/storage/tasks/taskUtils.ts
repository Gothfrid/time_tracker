"use strict";

import { List, Map } from "immutable";


export const TASK_REDUCER_NAME = "tasks";

export type IUserTask = {
  id?: number,
  user_id: number,
  user_name: string,
  hours: number,
  minutes: number,
  note: string
}

export interface IUserTaskIm<K, V> extends Map<K, V> {
  toJS(): IUserTask;
  get(key: K, notSetValue?: V): V;
  set(key: K, value: V): this;
}

export type TTaskReducer = List<IUserTaskIm<string, any>>


export const taskToIm = (task: IUserTask): IUserTaskIm<string, any> => {
  const imTask = Map(task) as IUserTaskIm<string, any>

  return imTask.has("id") === false ? imTask.set("id", imTask.hashCode()) : imTask
}


export const VOID_TASK = {
  id: 0,
  user_name: "",
  user_id: 0,
  note: "",
  minutes: 0,
  hours: 0
}