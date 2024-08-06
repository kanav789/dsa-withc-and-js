//  So in this problem you have given an target  and you have to found weather it is present or not

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

function BinarySearch(arr, key, start, end) {
  let s = start;
  let e = end.length - 1;
  let mid = Math.floor((start + end) / 2);
  let ans = -1;
  while (start <= end) {
    if (arr[mid] == key) {
      return mid;
    } else if (arr[mid] > key) {
      end = mid - 1;
    } else if (arr[mid] < key) {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return ans;
}

function SearchRotatedArray(arr, key) {
  let pivot = Pivot(arr);
  if (key >= arr[pivot] && key <= arr[arr.length - 1]) {
    return BinarySearch(arr, key, pivot, arr.length - 1);
  } else {
    return BinarySearch(arr, key, 0, pivot - 1);
  }
}

let arr = [7, 9, 1, 2, 3];
console.log(SearchRotatedArray(arr, 10));
