import { arrayToSort } from "../data";

const arr = [...arrayToSort];

enum ORDER {
  ASC,
  DESC,
}

function selectionSort(list: number[], order: ORDER = ORDER.ASC): number[] {
  for (let j = 0; j < list.length - 1; j++) {
    // pointer shift
    let outerPtr = j;

    // select min/max
    for (let i = j + 1; i < list.length; i++) {
      if (order === ORDER.ASC) {
        if (list[outerPtr] > list[i]) {
          outerPtr = i;
        }
      } else {
        if (list[outerPtr] < list[i]) {
          outerPtr = i;
        }
      }
    }

    // swap
    if (outerPtr !== j) {
      const temp = list[j];
      list[j] = list[outerPtr];
      list[outerPtr] = temp;
    }
  }

  return list;
}

console.log("SELECTION SORT: original array \n", arr.join(", "));
console.log("SELECTION SORT:  \n", selectionSort([...arr]).join(", "));
console.log(
  "SELECTION SORT:  ORDER.ASC \n",
  selectionSort([...arr], ORDER.ASC).join(", ")
);
console.log(
  "SELECTION SORT:  ORDER.DESC \n",
  selectionSort([...arr], ORDER.DESC).join(", ")
);
