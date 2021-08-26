import { arrayToSort } from "../data";

const arr = [...arrayToSort];
console.log("🚀 ~ file: bubble-sort.ts ~ line 4 ~ arr", arr);

function bubbleSort(list: number[]): number[] {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] > list[j]) {
        const temp = list[i];
        list[i] = list[j];
        list[j] = temp;
      }
    }
  }
  return list;
}

console.log("BUBLE SORT: original array: " + arr.join(", "));
console.log("BUBLE SORT: " + bubbleSort(arr).join(", "));
