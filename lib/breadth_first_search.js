function breadthFirstSearch(startingNode, targetVal) {
    const queue = [startingNode];
    let visited = new Set();

    while (queue.length) {
        const currentNode = queue.shift();
        if (visited.has(currentNode.val)) continue;
        visited.add(currentNode.val);
        if (currentNode.val === targetVal) {
            return currentNode;
        }
        queue.push(...currentNode.neighbors);
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};