// simple factorial

const factorial = (num) => {
  if (num < 2) return 1
  return num * factorial(num - 1)
}
console.log('factorial(1) (╯°□°)╯︵ ┻━┻ ', factorial(1))
console.log('factorial(2) (╯°□°)╯︵ ┻━┻ ', factorial(2))
console.log('factorial(3) (╯°□°)╯︵ ┻━┻ ', factorial(3))