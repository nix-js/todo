import { Consumer } from '../../nix/functions'
import Todo from '../../interfaces/todo'
import { bind, wire } from 'hyperhtml/esm'

const todoList: Consumer<Todo[]> = list => {
  const el = document.querySelector('.todo-list')
  if (el) {
    bind(el)`${
      list.map(todo => wire(todo)`
        <li>
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
