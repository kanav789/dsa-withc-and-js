// function Sqrt(input) {
//   if (input == 0 || input == 1) {
//     return input;
//   } else {
//     let i = 1;
//     let result = 1;

//     while (result <= input) {
//       i++;
//       result = i * i;
//     }
//     return i - 1;
//   }
// }
// console.log(Sqrt(36));

function Sqrt(input) {
  let s = 0;
  let e = input;
  let sqrt = 0;
  while (sqrt <= input) {
    let mid = Math.floor((s + e) / 2);

    if (mid * mid == input) {
      return mid;
    } else if (mid * mid < input) {
      sqrt = mid;
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }
  return sqrt;
}

console.log(Sqrt(3));

function Sqrt(input) {
  if (input < 0) {
    throw new Error("Input must be a non-negative integer");
  }

  let s = 0;
  let e = input;
  let sqrt = 0;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);

    if (mid * mid === input) {
      return mid;
    } else if (mid * mid < input) {
      sqrt = mid;
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }

  return sqrt;
}

console.log(Sqrt(36)); // Output: 6
console.log(Sqrt(25)); // Output: 5
console.log(Sqrt(17)); // Output: 4
console.log(Sqrt(0)); // Output: 0
console.log(Sqrt(1)); // Output: 1
