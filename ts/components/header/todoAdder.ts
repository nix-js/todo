/*
 * 'ListenForAndDispatchNewTodosAndMaybeClearTheInput' is a good name but a little verbose, so 'todoAdder' it is
 *
 * 'todoAdder' is not a single thing, but a confederation of smaller 'atomic' processes.
 * We group together generic functions to form a very specific outcome:
 *
 * The header section has one input control, we need to:
 *   listen for keydown
 *   if enter, collect the value of the input and use the addTodo dispatcher
 *   clear the input
 */

import { Consumer } from '../../nix/functions'
import { addEventListener, getValue, querySelector, setValue } from '../atomic/dom'
import { addTodo } from '../../redux/dispatchers/todos'

const keydown: Consumer<KeyboardEvent> = e => {
  if (e.code === 'Enter') {
    addTodo(getValue(<HTMLInputElement>e.target))
    setValue(<HTMLInputElement>e.target)
  }
}

export default function(): void {
  addEventListener(querySelector('.new-todo'), 'keydown', <EventListener>keydown)
}
