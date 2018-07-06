const testArray = [5, 7, 4, 9, 6]

const quickSort = (nums) => {
  if (nums.length <= 0) return nums;

  const pivot = nums[nums.length - 1]
  console.log('pivot (╯°□°)╯︵ ┻━┻ ', pivot)
  const left = [];
  const right = [];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot)  {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  let result = [...quickSort(left), pivot, ...quickSort(right)]
  console.log('result (╯°□°)╯︵ ┻━┻ ', result)
  return result
}

quickSort(testArray)