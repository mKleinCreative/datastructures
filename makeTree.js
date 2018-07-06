function createTree(base) {
  var basement = []
  for (i = 0; i <= base; i++) {
    basement.push('\xA0')
  }
  var j = Math.round(base / 2)
  for (i = j; i <= base; i++) {
    basement[i] = '*'
    basement[j] = '*'
    j--
    console.log(basement.join(""))
  }
}
createTree(52)
createTree(51)