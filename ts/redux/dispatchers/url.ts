import { Consumer } from '../../nix/functions'
import store from '../store'
import { PARSE_URL } from '../../constants'
import  ParseUrl from '../../interfaces/actions/url'

const parseUrl: Consumer<string> = url => {
  const o: ParseUrl = { type: PARSE_URL, url }
  store.dispatch(o)
}

export default parseUrl
