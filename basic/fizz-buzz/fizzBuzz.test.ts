import { test, expect, assertType } from 'vitest'
import { fizzBuzz } from './fizzBuzz'

test('test that function returns correct type', () => {
  assertType<Array<number | string>>(fizzBuzz(5))
})

test('test fizzBuzz with 5', () => {
  expect(fizzBuzz(5)).toStrictEqual([1, 2, 'fizz', 4, 'buzz'])
})

test('test fizzBuzz with 1', () => {
  expect(fizzBuzz(1)).toStrictEqual([1])
})

test('test fizzBuzz with 15', () => {
  expect(fizzBuzz(15)).toStrictEqual([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz'])
})

test('test fizzBuzz with 11', () => {
  expect(fizzBuzz(11)).toStrictEqual([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11])
})

// Handle edge cases/error cases?

test('test for 0 value', () => {
  expect(() => fizzBuzz(0)).toThrowError('number')
})

test('test for -10 value', () => {
  expect(() => fizzBuzz(-10)).toThrowError('number')
})
