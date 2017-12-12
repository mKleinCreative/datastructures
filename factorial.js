//bruteforce factorial with loops

function computeFactorial(num) {
  let result = 1;

  for (var index = 2; index <= num; index++) {
    result *= index;
  }
  return console.log(`factorial of ${num} is`,result)
}

computeFactorial(9)
computeFactorial(20)
computeFactorial(3)
computeFactorial(6)
computeFactorial(1)

// factorial using recursion

function factorialRecursion(num) {
  if (num === 1) return 1
  else {
    return num * factorialRecursion(num - 1);
  }
}

factorialRecursion(9)
factorialRecursion(3)
factorialRecursion(6)
factorialRecursion(1)