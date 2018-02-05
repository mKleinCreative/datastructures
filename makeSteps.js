console.log('hi (╯°□°)╯︵ ┻━┻ ')
function makeSteps(numOfSteps) {
  let x = "x"
  let temp = []
  for (let i = 0; i < numOfSteps; i++) {
    temp.push(x)
    x += "x"
  }
  console.log('temp (╯°□°)╯︵ ┻━┻ ', temp)
  console.log(temp.join(" "))
}
console.log(makeSteps(3))