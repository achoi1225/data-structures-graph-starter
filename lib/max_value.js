const { breadthFirstSearch } = require('./breadth_first_search');
function maxValue(node, visited = new Set()) {
    const queue = [node];
    let maxVal = node.val;
    while(queue.length) {
        const currentNode = queue.shift();
        if(visited.has(currentNode.val)) continue;
        visited.add(currentNode.val);

        if(currentNode.val > maxVal) {
            maxVal = currentNode.val;
        }
        queue.push(...currentNode.neighbors);
    }

    // return Math.max(...Array.from(visited));
    return Math.max(...visited);
    return maxVal;
}

module.exports = {
    maxValue
};