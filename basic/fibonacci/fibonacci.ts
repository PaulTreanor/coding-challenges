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
