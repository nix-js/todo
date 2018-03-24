/*
 * 'ListenForAndDispatchCompletionToggle' would be a bit long, so 'completeToggler' wins
 *
 * Like 'todoAdder', a function is all that is required here
 */
import { Consumer } from '../../nix/functions'
import { toggleTodos } from '../../redux/dispatchers/todos'

const change: Consumer<Event> = e => {
  toggleTodos((<HTMLInputElement>e.target).checked)
}

export default function(): void {
  const el = document.querySelector('.toggle-all')
  el && el.addEventListener('change', <EventListener>change)
}
