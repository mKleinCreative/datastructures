// notes on binary trees

// const BinaryTree = (value, left = null, right = null) => {
//   this.value = value,
//   this.left = left,
//   this.right = right
// }
class BinaryTree {
  constructor( value, left, right ) {
    this.value = value,
    this.left = left ? new BinaryTree(left) : null,
    this.right = right ? new BinaryTree(right) : null
  }
};

const root = new BinaryTree(10, 7, 15)

root.right.left = new BinaryTree(13)


console.log('(╯°□°)╯︵ ┻━┻  (╯°□°)╯︵ ┻━┻ ', )
