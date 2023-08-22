import { test, expect, assertType } from 'vitest'
import { checkPalindrome } from './palindrome'

test('checkPalindrome returns correct type', () => {
  assertType<boolean>(checkPalindrome('hello'))
})

test('checkPalindrome returns false if word is not a palindrome', () => {
  expect(checkPalindrome('paul')).toBe(false)
})

test('checkPalindrome returns true if word is a palindrome', () => {
  expect(checkPalindrome('navan')).toBe(true)
})

test('checkPalindrome is not case sensitive when checking if palindrome', () => {
  expect(checkPalindrome('Navan')).toBe(true)
})
