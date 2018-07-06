class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(value) {
    this.data = {...this.data, [this.length]: value}
    this.length++
    console.log('this.data (╯°□°)╯︵ ┻━┻ ', this.data)
  }
  pop() {
    return this.delete(this.length-1);
  }
  get(index) {
    console.log('this.data[index] (╯°□°)╯︵ ┻━┻ ', this.data[index])
    return this.data[index];
  }
  delete(index) {
    const ans = this.data[index];
    this._collapseTo(index);
    return ans;
  }
  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length - 1]
    this.length--;
  }
}

const testArray = new ArrayList;

testArray.push(1)
testArray.push(2)
testArray.push(289764)
testArray.push(1)
testArray.push(5)
testArray.push(1)
testArray.pop()
testArray.get(2)
console.log(testArray.data)
testArray.delete(2)
console.log(testArray.data)