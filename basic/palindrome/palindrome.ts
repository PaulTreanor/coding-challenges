export const checkPalindrome = (word: string): boolean => {
  const reversedWord = reverseWord(word)
  return word.toUpperCase() === reversedWord.toUpperCase()
}

const reverseWord = (word: string): string => {
  let i: number = word.length - 1
  let wordButReversed: string = ''
  for (i; i >= 0; i--) {
    wordButReversed = wordButReversed + word[i]
  }
  return wordButReversed
}
