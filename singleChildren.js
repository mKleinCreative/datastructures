

/* 
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:
            
1   2   4
 \ /   / \
  3   5   8
   \ / \   \
    6   7   9

Write a function that takes this data as input and returns two collections: one containing all individuals with zero known parents, and one containing all individuals with exactly one known parent.

Sample output (pseudocode):
[
  [1, 2, 4], //Individuals with zero parents
  [5, 7, 8, 9] //Individuals with one parent
]

 */

var parentChildPairs = [
    [1, 3], [2, 3], [3, 6], [5, 6],
    [5, 7], [4, 5], [4, 8], [8, 9]
];

function findLessThanTwoParents(peopleArray) {
  let familyTree = {};

  for(var i = 0; i < peopleArray.length; i++) {
    let count = 0
    let parent = peopleArray[i][0]
    let child = peopleArray[i][1]
    if ( !familyTree[child] ) {
       familyTree[child] = [ parent ]
    } else {
      familyTree[child].push(parent) 
    }
  };
  console.log("family Tree", familyTree)
  let children = Object.keys(familyTree);
  let parents = Object.values(familyTree);
       
  function diffArr(a, b) {
    return getUniqueValues(a, b).concat(getUniqueValues(b, a));
  };
  
  let zeroParentArray = [];
  let oneParentArray = [];
  
  for (var i = 0; i < parents.length; i++) {
    if ( !flattenedChildren.includes(parseInt(parents[i])) ) {
      zeroParentArray.push(parseInt(parents[i]))
    };
  };
  
  oneParentArray = diffArr(repeatChildren, flattenedChildren);

  let result = `[\n [${zeroParentArray}], \n [${oneParentArray}] \n]`;

  console.log("result", result)
  return result
}

findLessThanTwoParents(parentChildPairs);
