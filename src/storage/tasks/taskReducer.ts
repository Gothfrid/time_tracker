"use strict";

import { List } from "immutable";

import { TYPE } from "./tasksActions";
import { IUserTask, taskToIm, TTaskReducer } from "./taskUtils";



function reducer(state: TTaskReducer = List(), { type, payload }: { type: string, payload: IUserTask | TTaskReducer | Number }): TTaskReducer {

  switch (type) {

    case TYPE.INIT: {
      return payload as TTaskReducer;
    }
    case TYPE.ADD: {
      return state.push(taskToIm(payload as IUserTask));
    }

    case TYPE.REMOVE: {
      const id = payload as number
      return state.filter((task) => task.get('id') !== id)
    }

    case TYPE.EDIT: {
      const id = payload["id"] as IUserTask

      return state
        .filter((task) => task.get('id') !== id)
        .push(taskToIm(payload as IUserTask))

    }


    default: {
      return state;
    }
  }
}

export default reducer;