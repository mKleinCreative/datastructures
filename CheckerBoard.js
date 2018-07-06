function checkerBoard(size) {
  let space = " "
  let filledSpace = "#"
  let temp = [space]
  let gameBoard = []
  for (var index = 0; index <= (size * size); index++) {
    temp[index] === space ? temp.push(filledSpace) : temp.push(space)
  }
  let storage = []
  temp.forEach((tile, index) => {
    if ((index + 1) % size === 0) {
      storage.push(tile)
      gameBoard.push(storage)
      storage = []
    } else {
      storage.push(tile)
    }
  })
  gameBoard.map((array, index) => {
    index % 2 !== 0 ? array.reverse().join('') : array.join('')
  })
  return gameBoard.join('\n').replace(/[,]/g, '')
}

// console.log(checkerBoard(5000))
console.log(checkerBoard(50))
console.log(checkerBoard(8))