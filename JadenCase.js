String.prototype.toJadenCase = function () {
  //...
  console.log(this)
  let stringArr = this.split(' ')
  let newString = stringArr.map((word) => {
    word = word.split('')
    word[0] = word[0].toUpperCase()
    word = word.join('')
    console.log('word (╯°□°)╯︵ ┻━┻ ', word)
    return word
  })
  console.log('stringArr (╯°□°)╯︵ ┻━┻ ', stringArr)
  console.log('newString (╯°□°)╯︵ ┻━┻ ', newString)
  return newString.join(' ')
};

const str = "How can mirrors be real if our eyes aren't real"

console.log('Jaden case', str.toJadenCase())