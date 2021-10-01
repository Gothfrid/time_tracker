"use strict"

const USERS_URL = "https://jsonplaceholder.typicode.com/users"

export async function fetchUsers() {
  return fetch(USERS_URL)
    .then(response => response.json())
    .then(response => response.map(({ id, name }) => ({ id, name })))
}