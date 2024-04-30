const inputFirst = document.getElementById("input-first-operand");
const inputSecond = document.getElementById("input-second-operand");
const elResult = document.getElementById("el-result");

const operator = document.getElementById("operator");

const btnResult = document.getElementById("btn-result");

let btnZero = document.getElementById("btn-zero");
btnZero.addEventListener("click", () => {
  toInput(0, !operator.value ? inputFirst : inputSecond);
});

let btnOne = document.getElementById("btn-one");
btnOne.addEventListener("click", () => {
  toInput(1, !operator.value ? inputFirst : inputSecond);
});

let btnTwo = document.getElementById("btn-two");
btnTwo.addEventListener("click", () => {
  toInput(2, !operator.value ? inputFirst : inputSecond);
});

let btnThree = document.getElementById("btn-three");
btnThree.addEventListener("click", () => {
  toInput(3, !operator.value ? inputFirst : inputSecond);
});

let btnFour = document.getElementById("btn-four");
btnFour.addEventListener("click", () => {
  toInput(4, !operator.value ? inputFirst : inputSecond);
});

let btnFive = document.getElementById("btn-five");
btnFive.addEventListener("click", () => {
  toInput(5, !operator.value ? inputFirst : inputSecond);
});

let btnSix = document.getElementById("btn-six");
btnSix.addEventListener("click", () => {
  toInput(6, !operator.value ? inputFirst : inputSecond);
});

let btnSeven = document.getElementById("btn-seven");
btnSeven.addEventListener("click", () => {
  toInput(7, !operator.value ? inputFirst : inputSecond);
});

let btnEight = document.getElementById("btn-eight");
btnEight.addEventListener("click", () => {
  toInput(8, !operator.value ? inputFirst : inputSecond);
});

let btnNine = document.getElementById("btn-nine");
btnNine.addEventListener("click", () => {
  toInput(9, !operator.value ? inputFirst : inputSecond);
});

let btnAdd = document.getElementById("btn-add");
btnAdd.addEventListener("click", () => {
  operator.value = "+";
});

let btnSub = document.getElementById("btn-sub");
btnSub.addEventListener("click", () => {
  operator.value = "-";
});

let btnMul = document.getElementById("btn-mul");
btnMul.addEventListener("click", () => {
  operator.value = "*";
});

let btnDiv = document.getElementById("btn-div");
btnDiv.addEventListener("click", () => {
  operator.value = "/";
});

function toInput(btnValue, input) {
  input.value += btnValue;
}

function calculate(firstNum, secondNum, operation) {
  let result;
  switch (operation) {
    case "+":
      result = firstNum + secondNum;
      break;
    case "-":
      result = firstNum - secondNum;
      break;
    case "*":
      result = firstNum * secondNum;
      break;
    case "/":
      result = firstNum / secondNum;
      break;
    default:
      console.log("Invalid Operator!");
      break;
    }
    elResult.textContent = result
}

btnResult.addEventListener('click', () => {
    let firstValue = parseFloat(inputFirst.value);
    let secondValue = parseFloat(inputSecond.value);
    let operation = operator.value

    calculate(firstValue, secondValue, operation)
})