// const arr = [3, 2, 1, 5, 2];
// let largest = arr[0];
// for (let i = 0; i <= arr.length - 1; i++) {
//   if (largest < arr[i]) {
//     largest = arr[i];
//   }
// }

// console.log("Largest Element is", largest);

// let Secondlargest = -1;
// for (let b = 0; b <= arr.length - 1; b++) {
//   if (arr[b] > Secondlargest && arr[b] != largest) {
//     Secondlargest = arr[b];
//   }
// }
// console.log("second largest element", Secondlargest);

function Largest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  return largest;
}

function secondLargest(arr, largest) {
  let SLargest = -1;
  for (let b = 1; b < arr.length; b++) {
    if (arr[b] > SLargest && arr[b] != largest) {
      SLargest = arr[b];
    }
  }
  return SLargest;
}

let arr = [1, 2, 3, 4, 3, 7];
let largest = Largest(arr);
console.log("largest", largest);
console.log(secondLargest(arr, largest));
