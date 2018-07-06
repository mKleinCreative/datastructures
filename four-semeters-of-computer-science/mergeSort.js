const testArray = [2, 4, 6, 7, 10];
const testArray2 = [1, 3, 5, 8, 9];

const stitch = (left, right) => {
  const results = [];

  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }
  return [...results, ...left, ...right]
}

const mergeSort = (nums) => {
  if (nums.length < 2) return nums

  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle, length);
  console.log('stitch(mergeSort(left), mergeSort(right)) (╯°□°)╯︵ ┻━┻ ', stitch(mergeSort(left), mergeSort(right)))
  return stitch(mergeSort(left), mergeSort(right));
}
