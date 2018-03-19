/*
 * 'ListenForAndDispatchCompletionToggle' would be a bit long, so 'completeToggler' wins
 *
 * Like, 'todoAdder' we group together some generic functions to perform a specific task
 */
import { Consumer } from '../../nix/functions'
import { addEventListener, getChecked, querySelector } from '../atomic/dom'
import { toggleTodos } from '../../redux/dispatchers/todos'

const change: Consumer<Event> = e => {
  toggleTodos(getChecked(<HTMLInputElement>e.target))
}

export default function(): void {
  addEventListener(querySelector('.toggle-all'), 'change', <EventListener>change)
}
