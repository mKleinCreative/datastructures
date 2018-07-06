function fizzBuzz(limiter) {
  let currentNumber = 0
  let storage = []
  let fizzBuzz = ''
  while(currentNumber <= limiter) {
    if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
      storage.push('fizzbuzz')
      currentNumber++
    } else if (currentNumber % 3 === 0) {
      storage.push('fizz')
      currentNumber++
    } else if (currentNumber % 5 === 0) {
      storage.push('buzz')
      currentNumber++
    }
    storage.push(currentNumber)
    currentNumber++
  }
  return storage
}

console.log(fizzBuzz(100))