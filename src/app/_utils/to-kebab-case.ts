export const toKebabCase = (s: string) => {
  const tokens = s.split(' ')
  let result = ''
  tokens.forEach((token, idx) => {
    result += token.toLowerCase()
    if (idx < tokens.length - 1) {
      result += '-'
    }
  })
  return result
}
