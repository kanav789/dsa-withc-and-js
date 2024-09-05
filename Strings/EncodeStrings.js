function Encode(str) {
  let count = 1;
  let ans = "";
  if (str.length === 0) return "";

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      ans += str[i - 1] + count;
      count = 1;
    }
  }
  console.log(ans);
}

let str = "aaabbbcccdd";
Encode(str);
