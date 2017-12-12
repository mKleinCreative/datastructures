// queues are FiFo, first thing going in is always going to be the first one out when dequeue is called.

// constructor includes a storage

function Queue(capactiy) {
  this._capactiy = capacity || Infinity;
  this._storage = {};
  this._head = 0
  this._tail = 0
}

Queue.prototype.enqueue = function(value) {
  if (this.count() < this._capactiy) {
    this._storage[this._tail++] = value;
    return this.count()
  }
  return "Queue is full! try again soon.";
}

Queue.prototype.dequeue = function() {
  var element = this._storage[this._head];
  delete this._storage[this.head]
  if (this._head < this._tail) this._head++;
  return element;
}

Queue.prototype.peek = function() {
  return this._storage[this.head]
}

Queue.prototype.count = function() {
  return this._tail - this.head;
}

Queue.prototype.contains = function(value) {
  for( let i = this._head; i < this._tail; i++) {
    if(this._storage[i] === value) return true;
  }
  return false
}

Queue.prototype.until = function(value) {
  for( let i = this._head; i < this.tail; i++) {
    if (this._storage[i] === value) return i-this.head+1;
  }
  return null;
}

module.exports = Queue