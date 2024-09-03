// so this is the way to reverse the whole string
// let s1 = "Hello World";
// console.log(s1.length);
// let reverseString = "";
// for (let i = s1.length - 1; i >= 0; i--) {
//   reverseString += s1[i];
// }
// console.log(reverseString);

let str = "the sky is blue";

function reverseWord(str) {
  let ans = "";
  let n = str.length;
  let temp = "";
  let i = 0;

  while (i < n) {
    while (str[i] == " " && i < n) i++;
    temp = "";
    while (str[i] !== " " && i < n) {
      temp += str[i];
      i++;
    }
    if (temp.length > 0) {
      if (ans.length == 0) {
        ans = temp;
      } else {
        console.log(ans);
        ans = temp + " " + ans;
      }
    }
  }
  console.log(ans);
}

reverseWord(str);
