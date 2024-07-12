let count = 0;
function f() {
  console.log(count, "\n");
  count++;
  f();
}
f();
