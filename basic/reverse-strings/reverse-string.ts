export const reverseString = (input: string): string => {
  let reversedString: string = ''
  let i: number = input.length - 1
  for (i; i >= 0; i--) {
    reversedString = reversedString + input[i]
  }
  return reversedString
}
