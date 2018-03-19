/* 
 * dispatchers are a combination of:
 *   store.dispatch(some-action-creator())
 */
import { Consumer } from '../../nix/functions'
import store from '../store'
import Action from '../../interfaces/actions/action'
import { Add, Toggle, ToggleAll } from '../../interfaces/actions/todo'
import { ADD, TOGGLE, TOGGLE_ALL, CLEAR_COMPLETED } from '../../constants'

const addTodo: Consumer<string | undefined> = text => {
  if (text) {
    const o:Add = { type: ADD, text }
    store.dispatch(o)
  }
}

const toggleTodo: Consumer<number> = id => {
  const o:Toggle = { type: TOGGLE, id }
  store.dispatch(o)
}

function clearCompleted(): void {
  const o:Action = { type: CLEAR_COMPLETED }
  store.dispatch(o)
}

const toggleTodos: Consumer<boolean> = completed => {
  const o:ToggleAll = { type: TOGGLE_ALL, completed }
  store.dispatch(o)
}

export { addTodo, toggleTodo, toggleTodos, clearCompleted }
