function checksortedarray(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }

  return true;
}
const arr = [1, 2, 3, 1];
console.log(checksortedarray(arr));
