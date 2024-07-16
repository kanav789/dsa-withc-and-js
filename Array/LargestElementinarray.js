const arr = [3, 2, 1, 5, 2];
let largest = arr[0];
for (let i = 0; i <= arr.length - 1; i++) {
  if (largest < arr[i]) {
    largest = arr[i];
  }
}
console.log(largest);
