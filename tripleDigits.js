function tripledouble(num1, num2) {
  let result1 = (/([0-9])\1{2,}/).test(num1)
  let result2 = (/([0-9])\1{1,}/).test(num2)
  console.log(num1, num2)

  let repeat1 = num1.toString().match(/([0-9])\1{2,}/)
  if (result1) {
    console.log('repeat1',repeat1[0])
    let repeat2 = num2.toString().match(/([0-9])\1{1,}/)
    console.log('repeat2',repeat2)

    let sameNumber = num2.toString().match(repeat1[1].repeat(2))
    if (result1 && result2 && sameNumber) {
      return 1 
    } else return 0
  }
}

tripledouble(451999277, 41177722899)
tripledouble(1222345, 12345)
tripledouble(12345, 12345)
tripledouble(666789, 12345667)
tripledouble(10560002, 100)