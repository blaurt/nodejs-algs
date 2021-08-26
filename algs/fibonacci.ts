// F(0)  =	0
// F(1)  =	1
// F(2)  =	1
// F(3)  =	2
// F(4)  =	3
// F(5)  =	5
// F(6)  =	8
// F(7)  =	13
// F(8)  =	21
// F(9)  =	34
// F(10) =	55

function fiboNRecursive(target: number): number {
  if (target < 0) {
    throw new Error("Invalid argument, number must be positive");
  }
  if (target == 0) {
    return 0;
  }

  if ([1, 2].includes(target)) {
    return 1;
  }

  return fiboNRecursive(target - 2) + fiboNRecursive(target - 1);
}
const target = 8;
console.log(`Fibonacci: ${target} `, fiboNRecursive(target));
