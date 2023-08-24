// Given n, return value of n!

export const factorial = (n: number): number => {
  if (n < 0) { throw new Error("You can't have a negative factorial") }
  if (n === 0) { return 1 }
  let factorialResult = 1
  for (n; n > 0; n--) {
    factorialResult = factorialResult * n
  }
  return factorialResult
}

// Recursive version of factorial

export const recursiveFact = (n: number): number => {
  if (n < 0) { throw new Error("You can't have a negative factorial") }
  if ([0, 1].includes(n)) { return 1 }
  if (n === 1) { return 1 }
  return n * recursiveFact(n - 1)
}
