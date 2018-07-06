/*
  a interesting polygon is just a square with a side length 1. an n-interesting polygong is obtained by taking the n-1 interesting polygon and appending the 1-interesting polygons to its rim, side by side. 
  1 - x
        x
  2 - x x x
        x
          x
        x x x
  3 - x x x x x
        x x x 
          x
*/
function interestingSquare(n) {
  return (n * n) + ((n - 1) * (n - 1));
}

// console.log(interestingSquare(1))
// console.log(interestingSquare(2))
// console.log(interestingSquare(3))
// console.log(interestingSquare(4))
console.log(interestingSquare(25045743620))