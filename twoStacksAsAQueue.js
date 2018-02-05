function Queue_TwoStacks() {
  this._stackIn = new Stack()
  this._stackOut = new Stack()
}

Queue_TwoStacks.prototype._enqueue = (val) => {
  this._stackIn.push(val);
}

Queue_TwoStacks.prototype._transferStacks = () => {
  while (this._stackIn.count() > 0) {
    this._stackOut.push(this._stackIn.pop());
  }
};

Queue_TwoStacks.prototype._dequeue = () => {
  if (this._stackOut.count() === 0) this._transferStacks();
  return this._stackOut.pop();
}

Queue_TwoStacks.prototype._count = () => {
  return this._stackIn.count() + this._stackOut.count()
}

