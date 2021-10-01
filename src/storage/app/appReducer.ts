"use strict";

import { List, Map } from "immutable";
import { ITypedMap } from "../../utils/types_utils";
import { TYPE } from "./appActions";




function reducer(
  state: ITypedMap<string, string> = Map(),
  { type, payload }: { type: string, payload: string }): ITypedMap<string, string> {

  switch (type) {

    case TYPE.LOGIN: {
      return state.set("user", payload);
    }


    default: {
      return state;
    }
  }
}

export default reducer;