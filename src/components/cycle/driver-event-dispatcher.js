import {default as xs} from 'xstream'
import {default as fromEvent} from 'xstream/extra/fromEvent'

export default (element) => {
  return event$ => {
    event$.subscribe({
      next: event => element.dispatchEvent(event)
    })
    return (event, useCapture) => fromEvent(element, event, useCapture)
  }
}