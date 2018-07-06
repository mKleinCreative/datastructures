// a function that calls itself, yay

var callMe = function(n) {
  console.log('n (╯°□°)╯︵ ┻━┻ ', n)
  if ( n === 1 ) {
    return console.log('Awwweee Yeah');
  }
  console.log('anytime')
  return callMe(n - 1); 
};

callMe(3)