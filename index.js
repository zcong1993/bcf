const MIN = 100 // default min time 100ms
const MAX = 10 * 1000 // default max time 10s
const FACTOR = 2 // default factor 2
const JITTER = false // default jitter false

class BCF {
  constructor({
    factor = FACTOR,
    jitter = JITTER,
    min = MIN,
    max = MAX
  } = {}) {
    this.attempt = 0
    this.factor = factor
    this.jitter = jitter
    this.min = min
    this.max = max
  }
  reset() {
    this.attempt = 0
  }
  getAttempt() {
    return this.attempt
  }
  forAttempt() {
    if (this.min <= 0) {
      this.min = MIN
    }
    if (this.max <= 0) {
      this.max = MAX
    }
    if (this.min >= this.max) {
      // short-circuit
      return this.max
    }
    if (this.factor < 0) {
      this.factor = FACTOR
    }
    let durf = this.min * Math.pow(this.factor, this.attempt)
    if (this.jitter) {
      durf = (Math.random() * (durf - this.min)) + this.min
    }
    if (durf < this.min) {
      return this.min
    } else if (durf > this.max) {
      return this.max
    }
    return durf
  }
  duration() {
    const d = this.forAttempt()
    this.attempt++
    return d
  }
}

module.exports = BCF
