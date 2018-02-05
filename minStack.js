function Stack(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
}

Stack.prototype.push = function (value) {
  if (this._count < this._capacity) {
    this._storage[this._count++] = value;
    return this._count;
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
};

Stack.prototype.pop = function () {
  if (this._count === 0) {
    return 'No element inside the stack. Add element before poping.'
  }

  var value = this._storage[--this._count];
  delete this._storage[this._count];
  if (this._count < 0) {
    this._count = 0;
  }
  return value;
};

Stack.prototype.peek = function () {
  return this._storage[this._count - 1];
}

Stack.prototype.count = function () {
  return this._count;
};


function MinStack(capacity) {
  this._capacity = capacity;
  this._storage = {}
  this._count = 0;
  this._min = new Stack()
}

MinStack.prototype.push = function(value) {
  
  if (this._count < this._capacity) {
    if (this._min.peek() < value) {
      this._min.push(this._min.peek())
    } else {
      this._min.push(value)
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
