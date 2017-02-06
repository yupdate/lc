/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var old_cloneGraph = function(graph) {
    if(!graph) {
        return graph;
    }

    let nodes = getNodes(graph);
    const map = new Map();
    
    nodes.forEach((node)=>{
       map.set(node, new UndirectedGraphNode(node.label));
    });
    
    for(let node of map.keys()) {
        let newNode = map.get(node);
        newNode.neighbors = [];
        for(let n of node.neighbors) {
            newNode.neighbors.push(map.get(n));
        }
    }
    
    return map.get(graph);
    
};

let getNodes = (graph)=>{
    let res = [], s = new Set(), next = [graph];
    while(next.length) {
        let cur = next.shift();
        if(!s.has(cur)) {
            res.push(cur);
            s.add(cur);
            next = next.concat(cur.neighbors);
        }
    }
    
    return res;
};

//dfs
var cloneGraph = (graph) => {
    if(!graph) return graph;
    
    const nodes = new Map();
    
    return clone(nodes, graph);
};

var clone = (map, node) =>{
  if(!node) return null;
  
  if(map.has(node.label)) {
      return map.get(node.label);
  }
  
  let cloned = new UndirectedGraphNode(node.label);
  map.set(cloned.label, cloned);

  node.neighbors.forEach((node)=>{
     cloned.neighbors.push(clone(map, node));
  });
  
  return cloned;
};



