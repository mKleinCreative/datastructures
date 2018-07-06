// Given an amount of dollars and the total of the object 

function makeChange(total, givenAmount) {
  if (givenAmount < total) return "nice try dude, no change for you."
  total = parseFloat(total).toFixed(2);
  givenAmount = parseFloat(givenAmount).toFixed(2);

  let remainder = (givenAmount - total) * 100

  let change = [];

  let coins = {}


  let myCoins = [25, 10, 5, 1]

  let numberOfCents = remainder % 5
  console.log('remainder (╯°□°)╯︵ ┻━┻ ', remainder)

  // your code here
}

// example inputs
makeChange(".67", "1")
makeChange("5.35","6.00") // output ::> [2, 1, 1, 0]

// console.log('makeChange("5.35", "6.00") (╯°□°)╯︵ ┻━┻ ', makeChange("5.35", "6.00"))