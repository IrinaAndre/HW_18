function mainFunction(callback) {
  let firstNum = +prompt("Please enter the first number");
  let secondNum = +prompt("Please enter the second number");

  callback(firstNum, secondNum);
}

function modulo(firstNum, secondNum) {
  let mod = firstNum % secondNum;

  alert(mod);
}

mainFunction(modulo);
