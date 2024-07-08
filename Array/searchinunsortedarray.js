function search(arr, n, key) {
  for (let i = 0; i <= n; i++) {
    if (arr[i] === key) return i;
  }
  return -1;
}
let arr = [3, 1, 1, 4, 7];
let n = arr.length;
let key = 7;
let position = search(arr, n, key);
console.log(position);

console.log(
  "what is the time complexity of this code is , so basically if we see the running time of this code is totaly depend upon the no. of time happen of searching",
  "so the complexity is O(n)"
);
