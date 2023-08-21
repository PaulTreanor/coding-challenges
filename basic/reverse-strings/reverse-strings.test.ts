import { test, expect } from 'vitest'
import { reverseString } from './reverse-string'

test('Test reversing regular string', () => {
  expect(reverseString('abc')).toBe('cba')
})

test('Test reversing a longer string', () => {
  expect(reverseString('paul treanor')).toBe('ronaert luap')
})

test('Test reversing empty string', () => {
  expect(reverseString('')).toBe('')
})

test('Test reversing a palindrome', () => {
  expect(reverseString('navan')).toBe('navan')
})
