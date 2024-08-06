// find the minimum value in rotated sorted array

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
let arr = [7, 9, 1, 2, 3];
console.log(Pivot(arr));
