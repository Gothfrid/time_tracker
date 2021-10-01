"use strict";

import { IS_DEV_MODE_ENABLED } from '../utils/utilities';

export function logError(message: string, data: any) {
  if (IS_DEV_MODE_ENABLED === true) {
    console.error(message, data ? data : '');
  }
}


export function logWarn(message: string, data: any) {
  if (IS_DEV_MODE_ENABLED === true) {
    console.warn(message, data ? data : '');
  }
}

export function logInfo(message: string, data: any) {
  if (IS_DEV_MODE_ENABLED === true) {
    console.info(message, data ? data : '');
  }
}