/*
import store from './store'
import app from 'dc/app'
import { parse } from 'action-creators/url'

function main() {
  // wire pop state to redux dispatches
  window.addEventListener('popstate', () => {
    store.dispatch(parse(window.location.href));
  }
}
*/

import todoAdder from './components/header/todoAdder'
import completeToggler from './components/main/completeToggler'
import todoLister  from './components/main/todoLister'

// listens for and dispatches new todos
todoAdder()
// listens for and dispatches toggle all completed state
completeToggler()
// curates and shows the correct list of todos
todoLister.subscribeToStateChange()
