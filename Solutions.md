# Testing 
For test driven development consider:
- Do you understand the problem
- Define a function signiture
- Write a basic test case
- Write an edge test case 
- If tests aren't passing double check test case inputs!!!

## Vitest 
- Prefer `toStrictEqual` over `toBe`

## TypeScript

### Setting up env 

`npm i -D typescript ts-node`

`./node_modules/.bin/tsc --init`

[paultreanor.com/eslint-vscode](https://paultreanor.com/eslint-vscode)

run `npx eslint .` to make sure it works 

### Union
```ts
// an array that can contain numbers and strings at the same time
const fizzBuzz = (n: number): Array<number | string> => {
    ////....
    return [1, 2, 'fizz'] //...
}

```

## Strings 

- To add something to the end of a string, just concatentate the string:

```js
reversedString = reversedString + index[i]
```

## JS Methods

`word.toUpperCase()`

### Throwing errors
```ts
if (n > 10) { throw new Error("Input has to be less than 10")}
```

### Testing errors in vitest
```ts
// Errors have to be wrapped in a function
// https://vitest.dev/api/expect.html#tothrowerror

test('Making sure invalid input causes error', () => {
    expect(() => fizzBuzz(-10)).toThrowError('number')
})
```

# Classic problems 
### Fibonacci starts from 1
1, 1, 2, 3, 5, 8, 13, 21