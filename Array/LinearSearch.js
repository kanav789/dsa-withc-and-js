function FindOccurrence(arr, nums) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == nums) {
      return i;
    }
  }
  return -1;
}
let arr = [1, 2, 3, 4, 5, 6];
let nums = 10;
console.log(FindOccurrence(arr, nums));

// Time Complexity  = O(N)
// Space Complexity =O(1)
