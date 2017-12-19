const deck = ['2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣', 'A♣',
  '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦', 'A♦',
  '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥', 'A♥'];


function getValue(card) {
  let value = card.charAt(0)
  if (value === "1" ) return 10
  else if (value === "J") return 2
  else if (value === "Q") return 3
  else if (value === "K") return 4
  else if (value === "A") return 11
  else {
    return parseInt(value)
  }
}

function twentyOne(card1, card2, card3) {
  // good luck
  let value1 = getValue(card1)
  let value2 = getValue(card2)
  let value3 = getValue(card3)
  let sum = (value1 + value2 + value3)
  console.log('sum (╯°□°)╯︵ ┻━┻ ', sum)
  console.log('value2 (╯°□°)╯︵ ┻━┻ ', value3)
  if (sum === 21) return 'twenty-one'
  else if (sum < 21) return 'less'
  else if (sum > 21) return 'more'
}

twentyOne('3♣', 'Q♣', 'Q♣')
twentyOne('7♣', '7♦', '7♥')
twentyOne('10♣', 'Q♣', '9♦')
twentyOne('9♣', '9♦', 'Q♣')
twentyOne('A♣', '4♦', 'Q♥')