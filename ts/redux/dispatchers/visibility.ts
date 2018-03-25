import { Consumer } from '../../nix/functions'
import store from '../store'
import { SET_VISIBILITY } from '../../constants'
import Filter from '../../interfaces/actions/visibility'

const changeVisibility: Consumer<string> = filter => {
  const o: Filter = { type: SET_VISIBILITY, filter }
  store.dispatch(o)
}

export default changeVisibility
