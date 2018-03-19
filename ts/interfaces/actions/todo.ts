import Action from './action'

export interface Add extends Action {
  readonly text: string;
}

export interface Toggle extends Action {
  readonly id: number;
}

export interface ToggleAll extends Action {
  readonly completed: boolean;
}
