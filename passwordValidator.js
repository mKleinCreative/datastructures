// Validate a password that has atleast one capital one lowercase and one number inside of it

function validate(password) {  
  const validator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/  
  return validator.test(password);
}

console.log(' validate(abc123ABC) is ',validate('abc123ABC') )
console.log(' validate(123ABCacb) is ',validate('123ABCacb') )
console.log(' validate(Password123) is ',validate('Password123') )
console.log(' validate(oasjd;atlj) is ',validate('oasjd;atlj') )
console.log(' validate(nnntjakKKJR1) is ',validate('nnntjakKKJR1') )
console.log(' validate(1Aa) is ',validate('1Aa') )
console.log(' validate(g;je) is ',validate('g;je') )
console.log(' validate(%(@*!&#$%) is ',validate('%(@*!&#$%') )