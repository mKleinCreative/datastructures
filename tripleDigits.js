
function tripledouble(num1, num2) {
  console.log(num1, num2)

  let repeat1 = num1.toString().match(/([0-9])\1{2,}/gi)
  if (result1 && result2) {
    console.log('repeat1', repeat1)
    let repeat2 = num2.toString().match(/([0-9])\1{1,}/gi)
    console.log('repeat2', repeat2)
    console.log('repeat1.join (╯°□°)╯︵ ┻━┻ ', repeat1.join('').split(''))
    console.log('repeat1.join (╯°□°)╯︵ ┻━┻ ', repeat2.join('').split(''))
    let sameNumber = repeat2.join('').split('').some(num => repeat1.join('').split('').includes(num.toString()))
    console.log('sameNumber (╯°□°)╯︵ ┻━┻ ', sameNumber)
    if (result1 && result2 && sameNumber) {
      return 1
    } else {
      return 0
    }
  } return 0
}


function imafunction(arugments) {
  
}

tripledouble(451999277, 41177722899)
tripledouble(1222345, 12345)
tripledouble(12345, 12345)
tripledouble(666789, 12345667)
tripledouble(10560002, 100)