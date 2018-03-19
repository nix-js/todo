import store from '../ts/redux/store'
import * as constants from '../ts/constants'
import { addTodo, toggleTodo, toggleTodos, clearCompleted } from '../ts/redux/dispatchers/todos'
import parseUrl from '../ts/redux/dispatchers/url'
import State from '../ts/interfaces/state'

describe('Todo app store', () => {
  it('has the correct default state', () => {
    expect(store.getState()).toEqual({visibility: 'show-all', todos: [], parsedUrl: {}})
  })

  it('can add a todo', () => {
    addTodo('testing')
    const state: State = store.getState()
    expect(state.todos && state.todos.length).toBe(1)
    expect(state.todos && state.todos[0].id).toBe(1)
    expect(state.todos && state.todos[0].text).toBe('testing')
    expect(state.todos && state.todos[0].completed).toBe(false)
  })

  it('can toggle a todo', () => {
    toggleTodo(1)
    const state: State = store.getState()
    expect(state.todos && state.todos[0].completed).toBe(true)
  })

  it('can clear completed todos', () => {
    addTodo('still testing')
    clearCompleted()
    expect(store.getState()).toEqual({visibility: 'show-all', todos: [{ id: 2, text: 'still testing', completed: false }], parsedUrl: {}})
  })

  it('will toggle all todos completed state', () => {
    addTodo('and still testing')
    let state:State = store.getState()
    expect(state.todos && state.todos.length).toBe(2)
    expect(state.todos && state.todos[0].completed).toBe(false)
    expect(state.todos && state.todos[1].completed).toBe(false)
    toggleTodos(true)
    state = store.getState()
    expect(state.todos && state.todos[0].completed).toBe(true)
    expect(state.todos && state.todos[1].completed).toBe(true)
  })

  describe('Url dispatching', () => {
    it('properly handles parse action', () => {
      parseUrl('http://www.foo.com/bar')
      const state: State = store.getState()
      expect(state.parsedUrl && state.parsedUrl.path).toBe('/bar')
    })
  })
})
