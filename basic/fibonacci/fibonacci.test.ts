import { test, expect, assertType } from 'vitest'
// import { fibonacci } from './fibonacci'
import { recusionFibonacci as fibonacci } from './fibonacci'

test('Testing that return type is number', () => {
  const fibonacciAnswer = fibonacci(10)
  assertType<number>(fibonacciAnswer)
})

test('Testing that 1 returns 1', () => {
  expect(fibonacci(1)).toStrictEqual(1)
})

test('Testing that 2 returns 1', () => {
  expect(fibonacci(2)).toStrictEqual(1)
})

test('Testing that 3 returns 2', () => {
  expect(fibonacci(3)).toStrictEqual(2)
})

test('Testing that 5 returns 5', () => {
  expect(fibonacci(5)).toStrictEqual(5)
})

test('Testing that 8 returns 21', () => {
  expect(fibonacci(8)).toStrictEqual(21)
})
