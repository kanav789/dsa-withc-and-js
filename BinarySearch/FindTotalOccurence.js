function FirstOccurence(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  let ans = -1;
  while (start <= end) {
    if (arr[mid] == key) {
      ans = mid;
      end = mid - 1;
    } else if (arr[mid] > key) {
      end = mid - 1;
    } else if (arr[mid] < key) {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return ans;
}

function LastOccurence(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  let ans = -1;
  while (start <= end) {
    if (arr[mid] == key) {
      ans = mid;
      start = mid + 1;
    } else if (arr[mid] > key) {
      end = mid - 1;
    } else if (arr[mid] < key) {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return ans;
}

let arr = [1, 2, 3, 3, 4, 5];
let target = 2;
const firstoccurence = FirstOccurence(arr, target);
const lastoccurence = LastOccurence(arr, target);
const TotalOccurence = lastoccurence - firstoccurence + 1;
console.log(TotalOccurence);

// to find the total occurenece , Firstly we have to find the index of first and last occurrence and then apply this formula
// Total Occurenece =(last occurence - first Occurence)+1;
