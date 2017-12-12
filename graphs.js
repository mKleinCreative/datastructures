// graphs are a multidirectional binary search tree essentially.
const data = {
  A: ["B", "C"],
  B: ["A", "G", "E"],
  C: ["A", "D", "E"],
  D: ["C"],
  E: ["B", "C"],
  G: ["B"]
}

function bfs(root, graph) {
  let queue = Object.assign([], graph[root]);
  let visited = [root];
  while(queue.length > 0) {
    let currentNode = queue.shift()
    let neighbors = graph[currentNode]
    visited.push(currentNode)
    neighbors.forEach((neighbor) => {
      if (!visited.includes(neighbor)) {
        queue.push(neighbor)
      }
    })
  }
  return console.log(visited)
}

bfs("A", data)

console.log('(╯°□°)╯︵ ┻━┻ data (╯°□°)╯︵ ┻━┻ ', data)

function bfsRecursive(graph, visited, queue) {
  console.log('(╯°□°)╯︵ ┻━┻ visited (╯°□°)╯︵ ┻━┻ ', visited)
  console.log('(╯°□°)╯︵ ┻━┻ queue (╯°□°)╯︵ ┻━┻ ', queue)
  if (queue.length === 0) {
    console.log('(╯°□°)╯︵ ┻━┻ returning visited (╯°□°)╯︵ ┻━┻ ', visited)
    return visited
  } else {
    let currentNode = queue.shift()
    let neighbors = graph[currentNode]
    if(!visited.includes(currentNode)) {
      visited.push(currentNode)
    }
    neighbors.forEach(neighbor => {
      if(!visited.includes(neighbor)) {
        queue.push(neighbor)
      }
    })
    bfsRecursive(graph, visited, queue)
  }
}


bfsRecursive(data, ["A"], data.A)