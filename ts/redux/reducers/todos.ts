import Reducer from '../../interfaces/reducer'
import { ADD, TOGGLE, TOGGLE_ALL, CLEAR_COMPLETED } from '../../constants'
import  Todo  from '../../interfaces/todo'
import Action from '../../interfaces/actions/action'
import { Add, Toggle, ToggleAll } from '../../interfaces/actions/todo'

// export function todos(state: Todo[] = [], action: Action): Todo[] {
const todos:Reducer<Todo[], Action> = (state = [], action) => {

  const map = {
    [ADD]: () => ([
      ...state,
      { id: state.length + 1, text: (<Add>action).text, completed: false }
    ]),

    [TOGGLE]: () => state.map(t => {
      if (t.id === (<Toggle>action).id) return { ...t, completed: !t.completed }
      return t
    }),

    [TOGGLE_ALL]: () => state.map(t => ({ ...t, completed: (<ToggleAll>action).completed })),

    [CLEAR_COMPLETED]: () => state.filter(t => !t.completed),
  }

  return map[action.type] ? map[action.type]() : state
}

export default todos
