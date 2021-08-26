import { arrayToSort } from "../data";

const arr = [...arrayToSort];
function quickSort(list: number[]): number[] {
  //   console.log("🚀 ~ file: quick-sort.ts ~ line 6 ~ quickSort ~ list", list);
  if (list.length <= 1) {
    return list;
  }

  const pivotIdx = Math.floor(list.length / 2);
  const pivot = list[pivotIdx];
  //   console.log("🚀 ~ file: quick-sort.ts ~ line 17 ~ quickSort ~ pivot", pivot);
  const lesser: number[] = [];
  const greater: number[] = [];
  const pivotDoubles: number[] = [];
  list.forEach((i) => {
    if (i === pivot) {
      pivotDoubles.push(i);
    }
    if (i < pivot) {
      lesser.push(i);
    }
    if (i > pivot) {
      greater.push(i);
    }
  });
  return [...quickSort(lesser), ...pivotDoubles, ...quickSort(greater)];
}
console.log("QUICK SORT: original array: \n", arr.join(", "));

console.log("QUICK SORT: result\n", quickSort(arr).join(", "));
