/*
 * A Nix Actor taking an 'onChange' Consumer, and an optional selection Filter.
 * These are used to subscribe to the redux store's change call, and filter the call to
 * getState thru <select> if provided. Eventually the provided <onChange> is called (if
 * the current state is different from the last seen)
 */

import { Consumer, Actor, Filter } from './nix/functions'
import State from './interfaces/state'
import store from './redux/store'

// TODO abstract generic classes with typed constuctors?
class BoundHandler {
  private currentState: any;

  constructor(private onChange: Consumer<any>, private select?: Filter<State, any>) {}

  handler = () => {
    const nextState: any = this.select? this.select(store.getState()) : store.getState()
    if (nextState !== this.currentState) {
      this.currentState = nextState
      this.onChange(this.currentState)
    }
  }
}

// function subscriber(onChange: Consumer<any>, select?: Filter<State, any>): Function {
const subscriber: Actor<Consumer<any>, Filter<State, any>, Function> = (onChange, select?) => {
  const bound = new BoundHandler(onChange, select)

  const unsubscribe = store.subscribe(bound.handler)
  // TODO make this initial call optional?
  bound.handler()
  return unsubscribe
}

export default subscriber
