type WeightedGraph = Record<string, Record<string, number>>;
// type WeightedGraph = Record<string, Array<{ name: string; weight: number }>>;
// const weightedGraph: WeightedGraph = {
//   a: [
//     { name: "b", weight: 2 },
//     { name: "c", weight: 1 },
//   ],

//   b: [{ name: "f", weight: 7 }],
//   c: [
//     { name: "d", weight: 5 },
//     { name: "e", weight: 2 },
//   ],
//   d: [
//     {
//       name: "f",
//       weight: 2,
//     },
//   ],
//   e: [{ name: "f", weight: 1 }],
//   f: [
//     {
//       name: "g",
//       weight: 1,
//     },
//   ],
//   g: [],
// };

const weightedGraph: WeightedGraph = {
  a: { b: 2, c: 1 },
  b: { f: 7 },
  c: { d: 5, e: 2 },
  d: { f: 2 },
  e: { f: 1 },
  f: { g: 1 },
  g: {},
};

function shortestPath(
  graph: WeightedGraph,
  start: keyof WeightedGraph,
  end: keyof WeightedGraph
) {
  const costs: Record<string, number> = {};
  const processed: string[] = [];
  let neighbors: Record<string, number> = {};
  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      let value = graph[start][node];
      costs[node] = value || Infinity;
    }
    console.log(
      "🚀 ~ file: dijkstra-path.ts ~ line 52 ~ Object.keys ~ costs",
      costs
    );
  });

  let node = findClosestPoint(costs, processed);
  while (node) {
    let cost = costs[node];
    neighbors = graph[node];

    Object.keys(neighbors).forEach((neighbor) => {
      let newCost = costs[neighbor] + cost;
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }

      processed.push(node as any);
      node = findClosestPoint(costs, processed);
    });
  }
  return costs;
}

function findClosestPoint(
  costs: Record<string, number>,
  processed: string[] = []
) {
  let lowestCost = Infinity;
  let lowestCostNode;
  Object.keys(costs).forEach((node) => {
    let cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  });

  return lowestCostNode;
}

// shortestPath(weightedGraph, "a", "g");
console.log(
  "🚀 ~ file: dijkstra-path.ts ~  ",
  shortestPath(weightedGraph, "a", "g")
);
