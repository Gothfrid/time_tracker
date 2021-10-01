"use strict";


export const TYPE = {
  LOGIN: "app/login",
}


export const app_login = (login: string) => ({
  type: TYPE.LOGIN,
  payload: login
})
