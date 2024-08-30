// MedianOftwosorted  Array

let num1 = [1, 2];

let num2 = [3, 4];
// let arr = num1.concat(num2);
// let sortedarr = arr.sort()

// let size = sortedarr.length - 1;

// if (size % 2 === 0) {
//   let s = sortedarr[0];
//   let e = sortedarr[size];
//   let mid = Math.floor((s + e) / 2);
//   console.log(mid, "mid");
// } else {
//   let s = 0;
//   let e = sortedarr[size - 1];
//   let mid = Math.floor((s + e) / 2);
//   console.log(mid);
//   let newvalue = (sortedarr[mid] + sortedarr[mid + 1]) / 2;
//   console.log(newvalue, "Prawa new value");
// }
// console.log(11 % 2);

var findMedianSortedArrays = function (num1, num2) {
  var a = [...num1, ...num2].sort((a, b) => a - b);
  console.log(a);
  var len = a.length;
  console.log(len);
  var mid = Math.floor(len / 2);
  console.log(mid);
  if (len % 2 === 0) {
    console.log((a[mid - 1] + a[mid]) / 2, "if condeition");
  } else {
    console.log(a[mid], "else condition");
  }
};

findMedianSortedArrays(num1, num2);
