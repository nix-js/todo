import todoAdder from './components/header/todoAdder'
import completeToggler from './components/main/completeToggler'
import todoLister  from './components/main/todoLister'

// listens for and dispatches new todos
todoAdder()
// listens for and dispatches toggle all completed state
completeToggler()
// curates and shows the correct list of todos
todoLister.subscribeToStateChange()
