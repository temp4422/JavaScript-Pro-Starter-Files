// Hoisted
function greet1() {
  console.log('Hello World')
}

// Not hoisted
const greet2 = function () {
  console.log('Hello World')
}
