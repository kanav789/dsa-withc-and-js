const arr = [3, 2, 1, 5, 2];
let largest = arr[0];
for (let i = 0; i <= arr.length - 1; i++) {
  if (largest < arr[i]) {
    largest = arr[i];
  }
}

console.log("Largest Element is", largest);

let Secondlargest = -1;
for (let b = 0; b <= arr.length - 1; b++) {
  if (arr[b] > Secondlargest && arr[b] != largest) {
    Secondlargest = arr[b];
  }
}
console.log("second largest element", Secondlargest);
