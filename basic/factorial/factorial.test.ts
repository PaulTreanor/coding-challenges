import { test, expect, assertType } from 'vitest'
// import { factorial } from './factorial'
import { recursiveFact as factorial } from './factorial'

test('Test that factorial returns correct type', () => {
  const factorialResult = factorial(10)
  assertType<number>(factorialResult)
})

test('Test that -1! returns 1', () => {
  expect(() => factorial(-1)).toThrowError()
})

test('Test that 0! returns 1', () => {
  expect(factorial(0)).toStrictEqual(1)
})

test('Test that 1! returns 1', () => {
  expect(factorial(1)).toStrictEqual(1)
})

test('Test that 2! returns 2', () => {
  expect(factorial(2)).toStrictEqual(2)
})

test('Test that 3! returns 6', () => {
  expect(factorial(3)).toStrictEqual(6)
})

test('Test that 4! returns 24', () => {
  expect(factorial(4)).toStrictEqual(24)
})
