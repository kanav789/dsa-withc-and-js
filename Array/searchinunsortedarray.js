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
