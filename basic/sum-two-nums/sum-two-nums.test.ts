import { test, assertType, expect } from 'vitest'
import { sumTwoNums } from './sum-two-nums'

test('Ensure return type of function is number', () => {
  const sumTwoNumsValue = sumTwoNums()
  assertType<number>(sumTwoNumsValue)
})

test('1 + 1 = 2', () => {
  expect(sumTwoNums(1, 1)).toBe(2)
})

test('4 + 5 = 9', () => {
  expect(sumTwoNums(4, 5)).toBe(9)
})

test('-1 + -1 = -2', () => {
  expect(sumTwoNums(-1, -1)).toBe(-2)
})
