function bestPurchase(currentTrip) {
  let moneyPool = parseInt(currentTrip[0])
  let flavors = parseInt(currentTrip[1])
  let prices = currentTrip[2].split(" ").map(Number)
  let pair = []

  for (let i = 0; i < prices.length; i++) {
    for (let j = 1; j < prices.length; j++) {
      if (i !== j && (prices[i] + prices[j] === moneyPool)) {
        pair.push(i)
        pair.push(j)
        break;
      }
    }
  }
  return (pair[0] + 1) + ' ' + (pair[1] + 1)
}

function findFlavors(oneTrip) {
  let perchasePerTrip = oneTrip.forEach(trip => {
    return console.log(bestPurchase(trip))
  })
}

function separateTrips(tripData, numOfTrips) {
  let i = 0
  let individualTrips = []

  while (i < tripData.length) {
    individualTrips.push(tripData.slice(i, i += 3))
  }
  return individualTrips
}

function processData(input) {
  //Enter your code here
  const parsedInput = input.split('\n')
  let numOfTrips = parsedInput[0]
  let tripData = parsedInput.slice(1)
  let eachTrip = separateTrips(tripData, numOfTrips)
  let bestPurchase = findFlavors(eachTrip)
} 
