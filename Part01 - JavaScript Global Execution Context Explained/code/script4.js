console.log("START: Global Execution Context");

var globalVariable = "I am Global Varialbe";

function globalFunction() {
  console.log("PRINT: Inside Global Function");
  console.log("exit");
}

console.log(globalVariable);
globalFunction();

console.log("END: Global Execution Context");
