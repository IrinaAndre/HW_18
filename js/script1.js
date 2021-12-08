function mainFunction(callback) {
  let number = +prompt("Please enter a number");
  let degree = +prompt("Please enter the degree of the number");

  callback(number, degree);
}

function exponentiation(number, degree) {
  let exponent = Math.pow(number, degree);

  alert(exponent);
}

mainFunction(exponentiation);
