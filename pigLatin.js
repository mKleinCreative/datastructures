function pigIt(str) {
  //Code here
  let splitUp = str.split(' ')
  let result = splitUp.map( word => {
    word = word.split('')
    word.push(word[0])
    word.push('ay')
    word.shift()
    word.join('')
    return word.join('')
  })
  return result.join('')
}

pigIt('This is my string')