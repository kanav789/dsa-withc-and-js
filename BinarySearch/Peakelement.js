function peakElement(arr) {
  let s = 0;
  let e = arr.length - 1;

  while (s < e) {
    let mid = Math.floor((s + e) / 2);
    if (arr[mid] > arr[mid + 1]) {
      e = mid;
    } else {
      s = mid + 1;
    }
  }
  return s;
}

let arr = [1, 2, 1, 3, 5, 4, 6];

console.log(peakElement(arr), "kya");
