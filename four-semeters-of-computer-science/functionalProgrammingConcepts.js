
// mapping!

const double = num => 2*num;
const doubleEach = input => input.map( double );

const square = num => num*num;
const squareEach = input => input.map(square);

const doubleAndSquareEach = input => input.map(double).map(square);

const myMap = (array, fn) => {
  const answer = [];
  for (let index = 0; index < array.length; index++) {
    answer.push(fn(array[index]));
  }
  return answer;
}

// reducing!

const addTogether = list => {
  return list.reduce((acc, num) => acc+num, 0);
}

const concatenateStringsWithSpaces = (list) => {
  return list.reduce((acc, string) => acc + string + " ", "");
}

const squaresAndSubtracts = (list) => {
  return list
    .map( num => num*num )
    .reduce( (accumulator, num) => accumulator-num);
}

const myReduce = (list, fn, seed) => {
  let answer = seed;
  for (let index = 0; index < list.length; index++) {
    answer = fn(answer, list[index])
  }
  return answer;
}

// FILTER!!!

const filterOutOdds = nums => nums.filter(num => num % 2 === 0);

const filterState = (list, state) => list.filter(person => person.state === state);

const showOutOfCADevs = (list) => {
  return list
    .filter( person => person.state !== 'CA')
    .map( person => person.name.toUpperCase() )
    .reduce( (acc, name) => `${acc}, ${name}`);
}