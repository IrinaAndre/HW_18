function mainFunction(callback) {
  let firstNum = +prompt("Please enter the first number");
  let secondNum = +prompt("Please enter the second number");

  callback(firstNum, secondNum);
}

function multiplay(firstNum, secondNum) {
  let mult = firstNum * secondNum;

  alert(mult);
}

mainFunction(multiplay);
