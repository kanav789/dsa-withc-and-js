let arr = [1, 2, 4, 5, 7];
let newElement = 20;
if (arr.length <= 10) {
  arr.push(newElement);
  console.log(arr);
} else console.log("arr capacity is full");
