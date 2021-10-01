"use strict"

import { isImmutable } from "immutable";


export const IS_DEV_MODE_ENABLED = process.env.NODE_ENV !== 'production';


export function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export const EMPTY_USER = { id: -1, name: "" }



export function saveData(key: string, data: any): void {
  if (data === undefined) {
    return;
  }
  try {
    const data_to_save = isImmutable(data) === true ? data.toJS() : data;

    localStorage.setItem(key, JSON.stringify(data))
  } catch (e) {
    console.log('Failed to Save Data')
  }
}

export function loadData(key: string): any {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (e) {
    console.log('Failed to Load Data')
  }
}