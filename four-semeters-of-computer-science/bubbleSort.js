const testArray = [10,6,7,4,2,9,3,1,5,8]

const bubbleSort = (nums) => {
  do {
    var swapped = false;
    for(let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i+1]) {
        const temp = nums[i]
        nums[i] = nums[i+1]
        nums[i+1] = temp;
        swapped = true
      }
    }
  } while (swapped);
  console.log('nums (╯°□°)╯︵ ┻━┻ ', nums)
}

bubbleSort(testArray);