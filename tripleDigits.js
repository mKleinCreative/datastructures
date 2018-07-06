
function tripledouble(num1, num2) {
  console.log(num1, num2)

  let repeat1 = num1.toString().match(/([0-9])\1{2,}/gi)
  let repeat2 = num2.toString().match(/([0-9])\1{1,}/gi)
  let sameNumber = repeat2.join('').split('').some(num => repeat1.join('').split('').includes(num.toString()))
  if (sameNumber) {
    return 1
  } else {
    return 0
  }
}


tripledouble(451999277, 41177722899)
tripledouble(1222345, 12345)
tripledouble(12345, 12345)
tripledouble(666789, 12345667)
tripledouble(10560002, 100)