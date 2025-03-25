
console.log("PRINT1: before setTimeout");

// WHY_NOT?
// 0 miliseconds - print setTimeout-data, even no delay
// Explained soon!
setTimeout(function () {
  console.log("setTimeout-data");
}, 0);

console.log("PRINT2: after setTimeout");
console.log("PRINT2: after setTimeout");
console.log("PRINT2: after setTimeout");
console.log("PRINT2: after setTimeout");
