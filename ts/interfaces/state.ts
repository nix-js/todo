import Todo from './todo'
import ParsedUrl from './url'

export default interface State {
  readonly todos?: Todo[];
  readonly visibility?: string;
  readonly parsedUrl?: ParsedUrl;
}

