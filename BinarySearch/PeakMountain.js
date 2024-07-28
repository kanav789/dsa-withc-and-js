function PeakMountain(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1] && arr[mid] > [mid - 1]) {
      return mid;
    } else if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
}
// let arr = [0, 1, 0];
// let arr = [0, 2, 1, 0];
// let arr = [0, 10, 5, 2];
let arr = [3, 4, 5, 1];

console.log(PeakMountain(arr));
