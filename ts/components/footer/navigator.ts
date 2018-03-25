import { Consumer } from '../../nix/functions'
import { VISIBILITY } from '../../constants'
import Url from '../../interfaces/url'
import changeVisibility from '../../redux/dispatchers/visibility'
import parseUrl from '../../url-parser'

const nav: Consumer<MouseEvent> = e => {
  if ((<HTMLElement>e.target).tagName === 'A') {
    e.preventDefault()
    const where = (<HTMLAnchorElement>e.target).href
    if (where) {
      const parsed: Url = parseUrl(where)

      history.pushState(null, 'Todos', parsed.path)

      switch(parsed.path) {
        case '/':
          changeVisibility(VISIBILITY.SHOW_ALL)
          break
        case '/active':
          changeVisibility(VISIBILITY.SHOW_ACTIVE)
          break
        case '/completed':
          changeVisibility(VISIBILITY.SHOW_COMPLETED)
          break
      }
    }
  }
}

export default function(): void {
  const el = document.querySelector('.filters')
  el && el.addEventListener('click', <EventListener>nav)
}
