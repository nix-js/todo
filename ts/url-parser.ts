/*
 * Functions also fall under the 4 nix categories. Here we have a filter that
 * takes a string input and produces an object literal that must be a 'Url'
 */

import { Filter } from './nix/functions'
import Url from './interfaces/url'

const parts: string[] = [
  'source',
  'protocol',
  'authority',
  'userInfo',
  'user',
  'password',
  'host',
  'port',
  'relative',
  'path',
  'directory',
  'file',
  'query',
  'anchor',
]

const queryRx: RegExp = /(?:^|&)([^&=]*)=?([^&]*)/g
const strictRx: RegExp = /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/
const looseRx: RegExp = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?\@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/

const parseUrl: Filter<string, boolean, Url> = (url, strict=false) => {
  const match = strict ? strictRx.exec(url) : looseRx.exec(url),
    parsed:{ [index: string] : any } = {queryKey: {}};

  let i = 14

  while (i--) {
    parsed[parts[i]] = match && match[i]
  }

  if (parsed.query) {
    parsed.query.replace(queryRx, ($0:string, $1:string, $2:string) => {
      if ($1) parsed.queryKey[$1] = $2
    })
  }

  return parsed
}

export default parseUrl
