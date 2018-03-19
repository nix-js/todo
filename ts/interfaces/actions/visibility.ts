import Action from './action'

export default interface Filter extends Action {
  readonly filter: string;
}
