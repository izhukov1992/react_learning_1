/*
 * типы экшенов
 */

export const ADD_TODO = 'ADD_TODO'
export const ADD_TODO_ALL = 'ADD_TODO_ALL'
export const TOGGLE_TODO = 'TOGGLE_TODO'


/*
 * генераторы экшенов
 */

export function addTodo(text, prompt, id) {
  return { type: ADD_TODO, text, prompt, id }
}

export function addTodoAll(todos) {
  return { type: ADD_TODO_ALL, todos }
}

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id }
}
