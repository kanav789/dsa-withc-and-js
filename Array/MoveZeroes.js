// Problem Statement : we have to move all the zeroes to an end of the array;

// function(){

// }

function moveZero(arr) {
  let result = [];
  let zerocount = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] != 0) {
      result.push(arr[i]);
    } else {
      zerocount++;
    }
  }

  for (let j = 0; j < zerocount; j++) {
    result.push(0);
  }
  return result;
}
let arr = [0, 1, 0, 3, 12];
let n = arr.length;

console.log(moveZero(arr, n));
