const display = document.querySelector(".display");

function addValue(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = ``;
}
function calculateResult() {
  display.value = eval(display.value);
}
