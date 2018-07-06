const testArray = [1, 3, 5, 2, 4, 9, 6, 10, 7, 8]

const insertionSort = (nums) => {
  for (var i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if(nums[i] < nums[j]) {
        const spliced = nums.splice(i, 1)
        nums.splice(j, 0, spliced[0])
      }
    }
  }
  console.log('nums (╯°□°)╯︵ ┻━┻ ', nums)
  return nums
}

console.log('insertionSort(testArray) (╯°□°)╯︵ ┻━┻ ', insertionSort(testArray))