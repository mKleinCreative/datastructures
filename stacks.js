// "LIFO" last item added will be the first one taken out
// implementing a stack using a string for storage.
const Stack = function() {
  this.storage = "";
};

Stack.prototype.push = function(val) {
  // append the value to the end of the storage string
  this.storage = this.storage.concat(`-${val}`)
}

Stack.prototype.pop = function() {
  // find the last time a "-" occured
  let lastWord = this.storage.lastIndexOf("-")
  // return the string minus the last time "-" occured and all beyond that. 
  this.storage = this.storage.slice(0, lastWord)
}

Stack.prototype.size = function() {
  // find each instance of - and return the length of the resulting array.
  let lengthOfStack = this.storage.match(/-/g)
  console.log(`size of my stack is: ${lengthOfStack.length}`)
}

const myWeeklyMenu = new Stack();

myWeeklyMenu.push("RedBeans")
console.log('my menu', myWeeklyMenu)
myWeeklyMenu.push("Bacon")
console.log('my menu', myWeeklyMenu)
myWeeklyMenu.push("Eggs")
console.log('my menu', myWeeklyMenu)
myWeeklyMenu.pop()
console.log('my menu minus', myWeeklyMenu)
myWeeklyMenu.size()

() => {

}