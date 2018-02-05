class HashTable {
  constructor() {
    this.data = Array(16)
  }

  insert(key, value) {
    const index = HashTable.hash(key, this.data.length)
    if (!this.data[i]){
      this.data[i] = [key, val]
      return 
    } else {
      let inserted = false
      this.data[i].forEach((element) => {
        if(element[0] === key) {
          element[1] = val
          inserted = true
          return
        }
      })
      if(!inserted) {
        this.data[i].push([key, val])
      }
    }
  }
}

HashTable.hash = (key, maxSize) => {
  // assume key is a string
  // loop through each cahracter in the string and get the character code for that character and add it to a total.
  // total % maxSize to give us the total.
  let total
  key.split('').forEach((char, i) => {
    total += char.charCodeAt() * (i + 1)
  });
  return total % maxSize
}

