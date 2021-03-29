export const isClient = () => {
  return typeof window !== 'undefined'
}

/**
 *
 * just use for sample, should use library like lodash..etc.
 */
export const debounce = (cb, delay: number) => {
  let isDebounced = null
  return (...args) => {
    clearTimeout(isDebounced)
    isDebounced = setTimeout(() => cb(...args), delay)
  }
}
