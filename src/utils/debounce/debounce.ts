export default function debounce(func: Function, wait = 166) {
  let timeout: number
  function debounced(this: any, ...args: any[]) {
    const later = () => {
      func.apply(this, args)
    }
    window.clearTimeout(timeout)
    timeout = window.setTimeout(later, wait)
  }

  debounced.clear = (): void => {
    window.clearTimeout(timeout)
  }

  return debounced
}
