const Stack = require('./stacks');

function MinStack(capacity) {
  this._capacity = capacity;
  this._storageStack = new Stack()
  this._count = 0;
  this._min = new Stack()
}

MinStack.prototype.push = function(value) {
  
  if (this._count < this._capacity) {
    console.log('---===this._min 12===---', this._min)
    if ((this._min.peek() < value) || !this._min.size()) {
      this._min.push(this._min.peek())
      console.log('---===this._min 15===---', this._min)
      console.log('---===this._min.peek()===---', this._min.peek())
    } else {
      this._min.push(value)
      console.log('---===value===---', value)
    }
    this._storage[this._count++] = value
    return this._count;
  }
  return 'Max Capacity already reached. Remove element before adding a new one.'
};

const exampleStack = new MinStack(5);

exampleStack.push(4)
exampleStack.push(6)
exampleStack.push(22)
exampleStack.push(18)
exampleStack.push(5)

console.log('---===exampleStack===---', exampleStack)
