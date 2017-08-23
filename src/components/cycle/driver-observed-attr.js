import {default as xs} from 'xstream'

export default (element) => {
  let attrs
  const driver = attr$ => {
    /*attr$.subscribe({
      next: ({attr, value}) => element.setAttribute(attr, value)
    })*/
    return attrs
  }
  driver.push = () => {}
  attrs = xs.createWithMemory({
    start: listener => {
      driver.push = (attr, oldValue, value) => listener.next({attr, oldValue, value})
    },
    stop: () => {
      driver.push = () => {}
    }
  })
  return driver
}