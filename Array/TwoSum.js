let nums = [2, 7, 9, 10];
let target = 9;

function TwoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    // Loop through the elements after the current element
    for (let j = i + 1; j < nums.length; j++) {
      // Check if the sum of the current pair of elements equals the target
      if (nums[i] + nums[j] === target) {
        // Return the indices of the two elements
        return [i, j];
      }
    }
  }
  // If no such pair is found, return an empty array
  return [];
}

console.log(TwoSum(nums, target));
