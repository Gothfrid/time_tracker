"use strict";

import { Map } from "immutable";
import { APP_REDUCER_NAME } from "./appUtils";




export const getUser = (state: Map<string, any>) => state.getIn([APP_REDUCER_NAME, "user"], "")
