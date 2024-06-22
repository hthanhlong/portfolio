// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import '@testing-library/jest-dom'

class IntersectionObserver {
  constructor(callback, options) {
    this.callback = callback
    this.options = options
  }
  observe(target) {
    this.callback([{ isIntersecting: true, target }])
  }
  unobserve() {}
  disconnect() {}
}

global.IntersectionObserver = IntersectionObserver
