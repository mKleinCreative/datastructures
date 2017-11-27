// building a class

function Building(floors) {
  this.what = "building"
  this.floors = floors
}

// adding methods to the class via prototype object,
// this will make it available to all instances of the Building class.

Building.prototype.countFloors = function() {
  console.log(`I have ${this.floors} floors`)
}

const yourHouse = new Building(2)
const yourOffice = new Building(12)

yourHouse.countFloors()
yourOffice.countFloors()