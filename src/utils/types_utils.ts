"use strict";

import { Map } from "immutable";

export interface ISvgIcon {
  fill: string,
}



export interface IUser {
  id: string,
  name: string
}

export interface ITypedMap<K, V> extends Map<K, V> {
  toJS(): {};
  get(key: K, notSetValue?: V): V;
  set(key: K, value: V): this;
}
