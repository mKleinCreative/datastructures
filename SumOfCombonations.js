// Consider the array [3, 6, 9, 12].If we generate all the combinations with repetition that sum to 12, 
//we get 5 combinations: [12], [6, 6], [3, 9], [3, 3, 6], [3, 3, 3, 3].
//The length of the sub- arrays(such as [3, 3, 3, 3] should be less than or equal to the length of the initial array ([3, 6, 9, 12]).
// Given an array of positive integers and a number n, count all combinations with repetition of integers that sum to n.For example:
// find([3, 6, 9, 12], 12) = 5.
//now has a final solution, spoilers ahead


function total(array) {
  return array.reduce((acc, value) => acc += value)
}

function containsArray(comparing, uniques) {
  return !!uniques.find(unique => {
    return comparing.reduce((acc, num, index) => {
      if (acc === false) {
        return false
      }
      return num === unique[index]
    }, true)
  })
}

function solve(array, sum) {
  const solutions = []
  const possible = []
  array.forEach(startingNumber => {
    if (startingNumber < sum) {
      possible.push([startingNumber])
    } else if (startingNumber === sum) {
      solutions.push([startingNumber])
    }
  })

  while (possible.length) {
    const current = possible.shift()
    array.forEach(startingNumber => {
      const newPath = current.concat([startingNumber])
      newPath.sort()
      if (total(newPath) < sum && !containsArray(newPath, possible)) {
        possible.push(newPath)
      } else if (total(newPath) === sum && !containsArray(newPath, solutions)) {
        solutions.push(newPath)
      }
    })
  }
  console.log(solutions)
  return solutions.length
}

// console.log("[1, 2, 3], 7 -> ", solve([1, 2, 3], 7))
// console.log("[1, 2, 3], 5 -> ", solve([1, 2, 3], 5))
// console.log("[3, 6, 9, 12], 12 -> ", solve([3, 6, 9, 12], 12))
// console.log("[1, 4, 5, 8], 8 -> ", solve([1, 4, 5, 8], 8))
// console.log("[3, 6, 9, 12], 15 -> ", solve([3, 6, 9, 12], 15))
// console.log("[3, 6, 9, 12, 14, 18], 30 -> ", solve([3, 6, 9, 12, 14, 18], 30))
console.log(solve([1, 2, 3], 10) === 0)
console.log(solve([1, 2, 3], 7) === 2)
console.log(solve([1, 2, 3], 5) === 3)
console.log(solve([3, 6, 9, 12], 12) === 5)
console.log(solve([1, 4, 5, 8], 8) === 3)
console.log(solve([3, 6, 9, 12], 15) === 5)
console.log(solve([3, 6, 9, 12, 14, 18], 30) === 21)
