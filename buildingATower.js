function towerBuilder(nFloors) {
  const printBricks = (numOfBricks) => {
    let temp = []
    while(numOfBricks > 0) {
      temp.push('*')
      numOfBricks--
    }
    return `${temp.join('')}`
  }

  const printSpaces = (numOfSpaces) => {
    let temp = []
    while(numOfSpaces > 0) {
      temp.push(' ')
      numOfSpaces--
    }
    return `${temp.join('')}`
  }

  let tower = []
  // build here
  let numOfSpaces = 0
  const assemble = (floors) => {
    let nextFloor = floors - 1
    let bricks = floors + nextFloor
    let sideSpaces = Math.floor(numOfSpaces / 2) || 0;
    if (nextFloor < 0) {
      return tower.reverse().forEach(ele => console.log(`'${ele}'`))
    } else {
      floors - 1
      numOfSpaces = numOfSpaces + 2
      tower.push(`${printSpaces(sideSpaces)}${printBricks(bricks)}${printSpaces(sideSpaces)}`)
      return assemble(floors - 1)
    }  
  }

  return assemble(nFloors)
}

console.log(towerBuilder(1))
console.log(towerBuilder(6))
console.log(towerBuilder(45))

// or you could not hate your life with all the above code and do this


function towerBuilderTheSmartWay(n) {
  return Array.from({ length: n }, function (v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

console.log('smart way', towerBuilderTheSmartWay(5) )