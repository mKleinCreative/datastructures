// a function that takes an array and uses recursion to return its contents in reverse

const recursiveReverse = (array) => {
  let reversedArray = [];
  const addItems = (orderedArray) => {
    if (orderedArray.length > 0) {
      reversedArray.push(orderedArray.pop());
      addItems(orderedArray);
    }
  }
  addItems(array)

  return reversedArray
}
let exampleArray = [1, 2, 3, 4, 5];

console.log(`---===original array === ${exampleArray}===---`, 
                   recursiveReverse(exampleArray)
            )


// a function that takes two arguments and multiplies each arr value into by a number and return an array of the values
let example2Array = [1, 2, 3, 4, 5];

const recursiveMultiplier = (arr, number) => {
  if (arr.length === 0) {
    return arr;
  }
  var last = arr.pop();
  recursiveMultiplier(arr, number);
  arr.push(last * number)
  return arr;
}

console.log('Multiply the example array by 2',recursiveMultiplier(example2Array, 2))