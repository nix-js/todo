import { Consumer } from '../../nix/composites'
import { VISIBILITY } from '../../constants'
import State from '../../interfaces/state'
import subscriber from '../../subscriber'
import todoList from './todolist'

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
