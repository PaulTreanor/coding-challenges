import { expect, test } from 'vitest'
import { helloWorld } from './hello-world'

test('return hello world', () => {
  expect(helloWorld()).toBe("Hello, World!")
})