import { combineReducers } from 'redux'
import {
  ADD_TODO,
  ADD_TODO_ALL,
  TOGGLE_TODO
} from './actions'

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      const todos = [
        ...state,
        {
          _id: action.id,
          task_name: action.text,
          prompt: action.prompt,
          done: false
        }
      ]
      //debugger;
      return todos
    case ADD_TODO_ALL:
      return [...action.todos]
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo._id === action.id) {
          return Object.assign({}, todo, {
            done: !todo.done
          })
        }
        return todo
      })
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos
})

export default todoApp
