export const fizzBuzz = (n: number): Array<number | string> => {
  // Add actual code here
  // if divisable by 3 console.log fizz
  // if divisiable by 5 log buzz
  // if divisible by 3 and 5 log fizzbuzz

  if (n < 1) { throw new Error('Input must be number equal 1 or greater') }

  const fizzBuzzArray: Array<number | string> = []

  for (let i: number = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      fizzBuzzArray.push('fizzbuzz')
      continue
    }
    if (i % 3 === 0) {
      fizzBuzzArray.push('fizz')
      continue
    }
    if (i % 5 === 0) {
      fizzBuzzArray.push('buzz')
      continue
    }
    fizzBuzzArray.push(i)
  }

  return fizzBuzzArray
}

console.log(fizzBuzz(15))
