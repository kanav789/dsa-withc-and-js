function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Swap the elements at left and right
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    // Move the pointers
    left++;
    right--;
  }
}

// Example 1
let s1 = ["h", "e", "l", "l", "o"];
reverseString(s1);
console.log(s1); // Output: ["o","l","l","e","h"]
