type TNode = {
  v: number;
  c?: TNode[];
};
const treeData: TNode = {
  v: 7,
  c: [
    {
      v: 5,
      c: [
        {
          v: 10,
          c: [
            {
              v: 11,
            },
          ],
        },
        {
          v: 7,
          c: [
            {
              v: 5,
              c: [
                {
                  v: 1,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      v: 5,
      c: [
        {
          v: 10,
        },
        {
          v: 15,
        },
      ],
    },
  ],
};

function recursiveTraverseSum(tree: typeof treeData): number {
  let sum = tree.v || 0;
  if (tree.c && tree.c.length) {
    tree.c.forEach((childNode) => (sum += recursiveTraverseSum(childNode)));
  }

  return sum;
}

function iterativeTraverseSum(tree: typeof treeData): number {
  let sum = tree.v || 0;
  if (!tree.c || !tree.c.length) {
    return sum;
  }
  const stack: TNode[] = [];
  tree.c.forEach((childNode) => stack.push(childNode));
  while (stack.length) {
    const node = stack.pop() as TNode;
    sum += node.v;
    if (node.c) {
      node.c.forEach((childNode) => stack.push(childNode));
    }
  }

  return sum;
}

// console.log(recursiveTraverseSum(treeData));
console.log(iterativeTraverseSum(treeData));
