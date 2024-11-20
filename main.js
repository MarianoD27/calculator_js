window.addEventListener('DOMContentLoaded', (event) => {

  const display = document.getElementById('display');

})

function addToDisplay(input) {
  if (display.value === "Error") {
    display.style.color = 'white'
    display.value = ''
  }
  display.value += input
}


function clearDisplay() {
  display.style.color = 'white'
  display.value = ""
}

function calculate() {
  if (display.value === "") {
    display.value = ""
  } else {
    try {
      display.value = eval(display.value);
    }
    catch (error) {
      display.style.color = 'red'
      display.value = 'Error'
    }
  }
}