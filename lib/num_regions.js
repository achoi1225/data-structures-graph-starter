function numRegions(graph) {
    const visited = new Set();
    let counter = 0;

    for (let node in graph) {
        counter += traverse(graph, node, visited);
    }
    return counter;
}

function traverse(graph, node, visited) {
    if (visited.has(node)) return 0;
    visited.add(node);
    graph[node].forEach(neighbor => traverse(graph, neighbor, visited));
    return 1;
}

module.exports = {
    numRegions
};