import { Consumer } from '../../nix/functions'
import { toggleTodo } from '../../redux/dispatchers/todos'
import Todo from '../../interfaces/todo'
import { bind, wire } from 'hyperhtml/esm'

const click: Consumer<MouseEvent> = e => {
  const isToggle = (<HTMLElement>e.target).classList.contains('toggle'),
    id = (<HTMLElement>e.currentTarget).getAttribute('data-id')

  if (isToggle && id) toggleTodo(parseInt(id))
}

const todoList: Consumer<Todo[]> = list => {
  const el = document.querySelector('.todo-list')
  if (el) {
    bind(el)`${
      list.map(todo => wire(todo)`
        <li class=${todo.completed ? 'completed' : ''} onclick=${click} data-id=${todo.id}>
          <div class='view'>
            <input class='toggle' type='checkbox'>
            <label for='toggle'>${todo.text}</label>
            <button class='destroy'></button>
          </div>
        </li>
      `)
    }`
  }
}

export default todoList
