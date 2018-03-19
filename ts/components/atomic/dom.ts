/*
 * Generic DOM operations. By defining them at an
 * atomic level we can be sure to only write them once, and use many times.
 *
 * NOTE: the aggressive guarding, this prevents checks from having to be repeatedly done at higher level
 * abstractions, making chaining worry free.
 *
 * NOTE: The NIX org will host a repo of atomic/orthogonal type operations like these
 * TODO switch to them when ready
 *   `import { getInputValue, setInputValue } from 'nix/atomic/dom' or something...
 *
 * "Orthogonality in programming language design is the ability to use various language features in
 * arbitrary combinations with consistent results."
 */

import { Filter, Consumer } from '../../nix/functions'

// Element | null union is for chaining with querySelector
const addEventListener: Consumer<HTMLElement | null, string, EventListener> = (el, e, fn) => {
  el && e && fn && el.addEventListener(e, fn)
}

const getChecked: Filter<HTMLInputElement, boolean> = el => el && el.checked

const getValue: Filter<HTMLInputElement, string> = el => el && el.value

const querySelector: Filter<string, HTMLElement | null> = sel => document.querySelector(sel)

// note that passing a falsy second arg will clear the input.
const setValue: Consumer<HTMLInputElement, string> = (el, val='') => { if (el) el.value = val }

export { addEventListener, getChecked, getValue, querySelector, setValue }
