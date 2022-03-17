let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let result = document.getElementById("sum-el");

let add = function () {
  let adding = num1 + num2;
  result.innerText = "sum :" + adding;
};

let subtract = function () {
  let subtracting = num1 - num2;
  result.innerText = "sum :" + subtracting;
};

let divide = function () {
  let dividing = num1 / num2;
  result.innerText = "sum :" + dividing;
};

let multiply = function () {
  let multiplying = num1 * num2;
  result.innerText = "sum :" + multiplying;
};
