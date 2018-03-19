import Action from './action'

export default interface ParseUrl extends Action {
  readonly url: string;
}
