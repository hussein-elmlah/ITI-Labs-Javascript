// Closure function implementation
function parent() {
  let coins = 5;
  return function () {
    if (coins) {
      return coins--;
    } else {
      return 0;
    }
  };
}
// children creation
let child1 = parent();
let child2 = parent();
let child3 = parent();
// children spending
// child1 spending
console.log("child1 : ",child1());
console.log("child1 : ",child1());
console.log("child1 : ",child1());
console.log("child1 : ",child1());
console.log("child1 : ",child1());
console.log("child1 : ",child1());
console.log("child1 : ",child1());
// child2 spending
console.log("child2 : ",child2());
console.log("child2 : ",child2());
// child3 spending
console.log("child3 : ",child3());
