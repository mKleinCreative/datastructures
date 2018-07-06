class Stack {
  constructor() {
    this.items = []
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0 ? true : false;
  }

  clear() {
    this.items = [];
  }
}

class TwoStackQueue {
  constructor() {
    this.entry = new Stack();
    this.exit = new Stack();
  }

  enqueue(element) {
    this.entry.push(element);
  }

  dequeue() {
    if (this.entry.isEmpty() && this.exit.isEmpty()) {
      return 'queue is empty, please try again :('
    }
    if (this.exit.isEmpty() && !this.entry.isEmpty()) {
      while(!this.entry.isEmpty()) {
        this.exit.push(this.entry.pop())
      }
    }
    return this.exit.pop()
  }

  size() {
    return this.entry.items.length + this.exit.items.length
  }

  isEmpty() {
    console.log(this.size() === 0)
  }

  clear() {
    this.entry.clear()
    this.exit.clear()
  }
}


const tester = new TwoStackQueue();
tester.isEmpty()

tester.enqueue(1)
tester.enqueue(2)
tester.enqueue(3)

tester.dequeue()

tester.enqueue(3)
console.log('tester.size() (╯°□°)╯︵ ┻━┻ ', tester.size())
console.log('tester (╯°□°)╯︵ ┻━┻ ', tester)
tester.isEmpty()
tester.clear()
tester.isEmpty()
console.log('tester (╯°□°)╯︵ ┻━┻ ', tester)