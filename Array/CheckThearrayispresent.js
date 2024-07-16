function checkArrayisSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}

let arr = [1, 2, 1, 3, 4];
console.log(checkArrayisSorted(arr));
