function mainFunction(callback) {
  let firstNum = +prompt("Please enter the first number");
  let secondNum = +prompt("Please enter the second number");

  callback(firstNum, secondNum);
}

function division(firstNum, secondNum) {
  let div = firstNum / secondNum;

  alert(div);
}

mainFunction(division);
