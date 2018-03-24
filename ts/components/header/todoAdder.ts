/*
 * 'ListenForAndDispatchNewTodosAndMaybeClearTheInput' is a good name but a little verbose, so 'todoAdder' it is
 *
 * The header section has one input control, we need to:
 *   listen for keydown
 *   if enter, collect the value of the input and use the addTodo dispatcher
 *   clear the input
 *
 * In our effort to do the _least_ possible, a simple function will suffice.
 */

import { Consumer } from '../../nix/functions'
import { addTodo } from '../../redux/dispatchers/todos'

const keydown: Consumer<KeyboardEvent> = e => {
  if (e.code === 'Enter') {
    const target = <HTMLInputElement>e.target,
      val = target.value

    if (val) {
      addTodo(val)
      target.value = ''
    }
  }
}

export default function(): void {
  const el = document.querySelector('.new-todo');
  el && el.addEventListener('keydown', <EventListener>keydown)
}
