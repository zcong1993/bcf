const BCF = require('../')

const helper = (bcf, n = 3) => {
  return Array(n).fill('').map(() => bcf.duration())
}

test('default config', () => {
  const bcf = new BCF()
  expect(helper(bcf)).toEqual([100, 200, 400])
})

test('reset test', () => {
  const bcf = new BCF()
  expect(helper(bcf)).toEqual([100, 200, 400])
  bcf.reset()
  expect(helper(bcf)).toEqual([100, 200, 400])
})

test('min time', () => {
  const bcf = new BCF({
    min: 200
  })
  expect(helper(bcf)).toEqual([200, 400, 800])
})

test('max time', () => {
  const bcf = new BCF({
    max: 150
  })
  expect(helper(bcf)).toEqual([100, 150, 150])
})

test('factor', () => {
  const bcf = new BCF({
    factor: 3
  })
  expect(helper(bcf)).toEqual([100, 300, 900])
})

test('jitter', () => {
  const bcf = new BCF({
    jitter: true
  })
  helper(bcf).forEach(d => {
    expect(typeof d === 'number').toBeTruthy()
    expect(d >= bcf.min && d <= bcf.max).toBeTruthy()
  })
})

test('invalid config', () => {
  const bcf = new BCF({
    min: -100,
    max: -1000,
    factor: -1
  })
  expect(helper(bcf)).toEqual([100, 200, 400])
})
