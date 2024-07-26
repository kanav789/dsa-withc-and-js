// type  Basic

function ArraySubset(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] == arr1[j]) {
        return true;
      }
    }
  }
}
let arr1 = [10, 5, 2, 23, 19];
let arr2 = [19, 5, 3];
console.log(ArraySubset(arr1, arr2));
