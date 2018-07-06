function inArray(array1, array2) {
  console.log(array1)
  console.log(array2)
  let result = array1.filter((comparisonWord) => {
    let checkComparisonWord = false
    array2.forEach(word => {
      let unfolded = word.includes(comparisonWord)
      if (checkComparisonWord) {}
      if (!checkComparisonWord && !unfolded) {}
      if (!checkComparisonWord && unfolded) {
        checkComparisonWord = true
      }
    });
    return checkComparisonWord
  })
  return result.sort()
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
a1 = ["xyz", "live", "strong"]

inArray(a1, a2)

// a1 = ["live", "strong", "arp"]
// inArray(a1, a2)

// a1 = ["tarp", "mice", "bull"]
// inArray(a1, a2)
