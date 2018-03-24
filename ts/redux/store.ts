import { createStore, applyMiddleware } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import root from './reducers/root'

export default createStore(
  root,
  devToolsEnhancer({}),
);
