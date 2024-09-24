function reverseArray(arr) {
  let n = arr.length;
  let result = [];
  for (let i = n - 1; i >= 0; --i) {
    result += arr[i];
  }

  return result;
}
console.log(reverseArray(["h", "e", "l", "l", "o"]));
