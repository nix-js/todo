import Reducer from '../../interfaces/reducer'
import { SET_VISIBILITY, VISIBILITY } from '../../constants'
import Action from '../../interfaces/actions/action'
import Filter from '../../interfaces/actions/visibility'

const visibility:Reducer<string, Action> = (state = VISIBILITY.SHOW_ALL, action) =>
  action.type === SET_VISIBILITY ? (<Filter>action).filter : state

export default visibility
