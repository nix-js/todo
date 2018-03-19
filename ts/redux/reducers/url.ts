import Reducer from '../../interfaces/reducer'
import { PARSE_URL } from '../../constants'
import ParsedUrl from '../../interfaces/url'
import ParseUrl from '../../interfaces/actions/url'
import Action from '../../interfaces/actions/action'
import parseUrl from '../../url-parser'

const parsedUrl: Reducer<ParsedUrl, Action> = (state = {}, action) =>
  action.type === PARSE_URL ? parseUrl((<ParseUrl>action).url) : state

export default parsedUrl
