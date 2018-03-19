import { combineReducers } from 'redux'
import visibility from './visibility'
import todos from './todos'
import parsedUrl from './url'

// TODO it appears that upcoming versions of redux typings will make the cast to 'any' not needed...
const root = combineReducers({ visibility, todos, parsedUrl } as any)

export default root
