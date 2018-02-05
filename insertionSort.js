const testArray = [123, 541, 2, 567, 200];


function insertionSort(items) {
  let i;
  let j;
  for (i = 0; i < items.length; i++) {
    let value = items[i];
    for (j = i - 1; j > -1 && items[j] > value; j--) {
      items[j + 1] = items[j];
    }
    items[j + 1] = value;
  }

  return items;
}

console.log('insertionSort(testArray) (╯°□°)╯︵ ┻━┻ ', insertionSort(testArray))