console.log("All Stack");

let arr = [];

let top = -1;

function push(x) {
  arr[++top] = x;
}
function pop() {
  top--;
}

push(10);
push(11);
push(16);
push(14);
push(122);

pop();
if (arr.length > 0) console.log(arr[top]);
else console.log("array stack is empty");
