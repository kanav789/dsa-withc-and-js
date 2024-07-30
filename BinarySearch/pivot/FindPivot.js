// find the minimum value in sorted array

function Pivot(arr) {
  let s = 0;
  let e = arr.length - 1;
  while (s < e) {
    let mid = Math.floor((s + e) / 2);
    if (arr[mid] >= arr[0]) {
      s = mid + 1;
    } else {
      e = mid;
    }
  }
  return s;
}
// let arr = [3, 8, 10, 17, 1];
console.log(Pivot(arr));
