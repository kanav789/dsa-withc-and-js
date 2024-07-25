function LeftRotate(nums) {
  let temp = nums[0];
  let n = nums.length;
  for (let i = 1; i < n; i++) [(nums[i - 1] = nums[i])];
  nums[n - 1] = temp;
  return nums;
}
let nums = [10, 2, 3, 4, 5, 6];
console.log(LeftRotate(nums));
