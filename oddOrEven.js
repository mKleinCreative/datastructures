function oddOrEven(array = [0]) {
  //enter code here
  let total = array.reduce((sum, num) => sum = sum + num)
  let evenOrOdd = Number.isInteger(total / 2)
  console.log('oddOrEven (╯°□°)╯︵ ┻━┻ ', evenOrOdd)
  if (evenOrOdd) return 'even'
  else {
    return 'odd'
  }
}

oddOrEven([1023, 1, 2])

