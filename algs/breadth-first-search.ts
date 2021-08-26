type Graph = Record<string, string[]>;
const graph: Graph = {};

graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];

/**
 * Breadth First Search
 */
function isThereAWayFromStartToEnd(
  graph: Graph,
  start: keyof Graph,
  end: keyof Graph
): boolean {
  let queue: string[] = [];
  queue.push(start);
  while (queue.length) {
    const currentPoint = queue.shift() as string;

    if (!graph[currentPoint]) {
      graph[currentPoint] = [];
    }

    if (graph[currentPoint].includes(end)) {
      return true;
    }

    queue = [...queue, ...graph[currentPoint]];
  }

  return false;
}

console.log(
  "Breadth fisrt search: ",
  isThereAWayFromStartToEnd(graph, "a", "d")
);
console.log(
  "Breadth fisrt search: ",
  isThereAWayFromStartToEnd(graph, "a", "w")
);
