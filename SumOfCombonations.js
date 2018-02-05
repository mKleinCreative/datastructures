// Consider the array [3, 6, 9, 12].If we generate all the combinations with repetition that sum to 12, 
//we get 5 combinations: [12], [6, 6], [3, 9], [3, 3, 6], [3, 3, 3, 3].
//The length of the sub- arrays(such as [3, 3, 3, 3] should be less than or equal to the length of the initial array ([3, 6, 9, 12]).
// Given an array of positive integers and a number n, count all combinations with repetition of integers that sum to n.For example:
// find([3, 6, 9, 12], 12) = 5.

let sumArray = (arrayToAdd) => {
  return arrayToAdd.reduce((runningTotal, addition) => {
    return runningTotal + addition
  }, 0)
}

function find(arr, n) {
  let hold = []
  for (var outside = arr.length - 1; outside >= 0; outside--) {
    let right = outside
    for (var left = 0; left <= outside; left++) {
      let temp = [arr[right]]
      let element = arr[left];
      if (arr[right] === n) {
        right = right - 1
      } else {
        while ((sumArray(temp) < n) && (temp.length <= arr.length)) {
          if ((sumArray(temp) + arr[right]) === n) {
            temp.push(arr[right])
            right = right - 1
          } else if ((sumArray(temp) + arr[right]) < n) {
            temp.push(arr[right])
          } else if (sumArray(temp) + element !== n) {
            temp.push(element)
          } else {
            temp.push(element)
          }
        }
      }
      if ((sumArray(temp) === n) && (temp.length <= arr.length)) {
        hold.push(temp)
      }
    }
  }
  console.log('hold (╯°□°)╯︵ ┻━┻ ', hold)
  return console.log(hold.length)
};

// console.log(find([1, 2, 3], 10) === 0)
// console.log(find([1, 2, 3], 7) === 2)
// console.log(find([1, 2, 3], 5) === 3)
// console.log(find([3, 6, 9, 12], 12) === 5)
// console.log(find([1, 4, 5, 8], 8) === 3)
// console.log(find([3, 6, 9, 12], 15) === 5)
// console.log(find([3, 6, 9, 12, 14, 18], 30) === 21)
