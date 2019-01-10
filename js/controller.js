// function createClearBtnTag(){
//     document.
// }

function myFunction(id) {
  document.calc.result.value += id;
}

function clearScreen() {
  document.calc.result.value = "";
}

function calculate() {
  let input = eval(document.calc.result.value);
  document.calc.result.value = input;
}
