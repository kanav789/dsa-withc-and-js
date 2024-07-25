let arr = [1, 2, 3, 4, 5, 6, 7];

function rotatebyydplace(arr) {
  let k = 3;
  let temp = arr[0];
  for (let i = 1; i <= arr[k]; i++) {
    if (arr[k] >= arr[i]) {
      temp = arr[i];
      temp = +1;
    } else return;
  }
  return temp;
}

console.log(rotatebyydplace(arr));
