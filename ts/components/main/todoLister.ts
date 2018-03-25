/*
 * TodoLister
 *
 * Here there is a piece of local state to hold, that being the
 * unsubscribe function returned from the subscriber. A class or an object literal
 * are good choices so that `this` may be referenced. In keeping with our 'do the least'
 * philosophy, we'll use a simple nix consumer literal with an `in` method that accepts
 * a `State` argument (this is, after all, what the subscriber will send (there is no selector)
 *
 * Also, we could further formalize the todoLister by extending the nix consumer composite
 * interface to type the `.unsubscriber`
 *
 *    interface TodoLister extends Consumer<State> {
 *      unsubscribe?: Void;
 *    }
 *
 * We don't do that here, as this app doesn't need it, but in a larger codebase may be warranted.
 */

import { Consumer } from '../../nix/composites'
import { VISIBILITY } from '../../constants'
import State from '../../interfaces/state'
import subscriber from '../../subscriber'
import todoList from './todoList'

const todoLister: Consumer<State> = {
  in(state) {
    if (state.todos) {
      const viz = state.visibility,
        list = viz === VISIBILITY.SHOW_ALL ?
        state.todos :
        state.todos.filter(t => t.completed === (viz === VISIBILITY.SHOW_ACTIVE ? false : true))

      todoList(list)
    }
  },

  subscribeToStateChange() {
    this.unsubscribe = subscriber(this.in)
  },
}

export default todoLister
