// Return the nth value in the fibonacci sequence
export const fibonacci = (n: number): number => {
  let prev: number = 0
  let curr: number = 1
  for (let i = 1; i < n; i++) {
    const tmp: number = prev
    prev = curr
    curr = prev + tmp
  }
  return curr
}

// Recursion solution - uses up too much memory
export const recusionFibonacci = (n: number): number => {
  if (n === 0) { return 0 }
  if (n <= 1) { return 1 }
  return recusionFibonacci(n - 1) + recusionFibonacci(n - 2)
}
