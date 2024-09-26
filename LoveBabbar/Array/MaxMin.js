// Find the max and min element in an array

function HighestNumber(nums) {
  let n = nums.length;
  high = nums[0];
  for (let i = 0; i <= n - 1; i++) {
    if (nums[i] > high) {
      high = nums[i];
    }
  }
  return high;
}

function LowestNumber(nums) {
  let n = nums.length;
  small = nums[0];
  for (let i = 0; i <= n - 1; i++) {
    if (nums[i] < small) {
      small = nums[i];
    }
  }
  return small;
}
console.log(
  "The Highest Number of the Array is ",
  HighestNumber([2, 4, 5, 6, 15, 7, 0, 25])
);
console.log(
  "The Lowest Number of the Array is",
  LowestNumber([2, 4, 5, 6, 15, 7, 25])
);
