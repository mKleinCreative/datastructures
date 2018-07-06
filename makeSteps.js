function makeSteps(numberOfSteps) {
  let x = "x"
  let temp = []
  for (let i = 0; i < numberOfSteps; i++) {
    temp.push(x + '\n')
    x += "x"
  }
  console.log('temp (╯°□°)╯︵ ┻━┻ ', temp)
  temp = temp.join('')
  return temp
}
console.log(makeSteps(7))