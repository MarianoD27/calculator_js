

function appendToDisplay(input) {
  if (display.value === "Error") {
    display.value = ""
    display.style.color = "white"
  }
  display.value += input;
}
function clearDisplay() {
  display.value = "";
  display.style.color = "white"
}
function calculate() {
  if (display.value === "") {
    display.value = ""
  } else
    try {
      display.value = eval(display.value)
    }
    catch (error) {
      display.value = "Error"
      display.style.color = "red"
    }
}