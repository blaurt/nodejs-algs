
export {};
const arr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];

const arrWO13 = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21,
];

let steps: StepData[] = [];

let attemptsCount = 0;
function binarySearchRecursive(
  list: number[],
  item: number
): { searchItem: number; result: number | null } {
  attemptsCount++;
  if (!list.length) {
    steps.push({ list, idx: null, guess: null });

    return { searchItem: item, result: null };
  }
  if (list.length == 1) {
    if (list[0] !== item) {
      steps.push({ list, idx: 0, guess: list[0] });
      return { searchItem: item, result: null };
    } else {
      return { searchItem: item, result: list[0] };
    }
  }

  const idx = Math.floor(list.length / 2);
  const guess = list[idx];
  steps.push({ list, idx, guess });

  if (guess == item) {
    return { searchItem: item, result: guess };
  }

  if (item > guess) {
    return binarySearchRecursive(list.slice(idx), item);
  } else {
    return binarySearchRecursive(list.slice(0, idx), item);
  }
}

function binarySearchIterative(
  list: number[],
  item: number
): { searchItem: number; result: number | null } {
  attemptsCount = 1;
  if (!list.length) {
    steps.push({ list, idx: null, guess: null });

    return { searchItem: item, result: null };
  }
  if (list.length == 1) {
    if (list[0] !== item) {
      steps.push({ list, idx: 0, guess: list[0] });
      return { searchItem: item, result: null };
    } else {
      return { searchItem: item, result: list[0] };
    }
  }
  while (list.length > 0) {
    const idx = Math.floor(list.length / 2);
    const guess = list[idx];
    steps.push({ list, idx, guess });
    if (guess == item) {
      return { searchItem: item, result: guess };
    }

    if (item > guess) {
      list = list.slice(idx+1);
    } else {
      list = list.slice(0, idx);
    }
    attemptsCount++;
  }

  return { searchItem: item, result: null };

}

function printSteps(
  steps: StepData[],
  searchItem: number,
  result: number | null
): void {
  console.log(`Searching for item: "${searchItem}"`);
  console.log("Result: " + (result ? "found!" : "not found!"));
  console.log(`Attempts: ${attemptsCount}`);
  console.log("Steps: [");
  steps.forEach(({ list, idx, guess }, i) =>
    console.log(
      `\t ${i + 1}: List: [` +
        list.join(", ") +
        "]," +
        ` - Idx: ${idx},` +
        ` - Guessed number: ${guess}`
    )
  );

  console.log("]\n");
}
type StepData = { list: number[]; idx: number | null; guess: number | null};


console.log('BINARY SEARCH: RECURSIVE');

const res = binarySearchRecursive(arr, 13);
printSteps(steps, res.searchItem, res.result);
steps = [];

const res2 = binarySearchRecursive(arrWO13, 13);
printSteps(steps, res2.searchItem, res2.result);
steps = [];


console.log('BINARY SEARCH: ITERATIVE');

const res3 = binarySearchIterative(arr,13)
printSteps(steps, res3.searchItem, res3.result);
steps = [];

const res4 = binarySearchIterative(arrWO13, 13);
printSteps(steps, res4.searchItem, res4.result);
steps = [];