const inputField = document.querySelector("#input");
const btn = document.querySelector("#btn");
const resultDisplay = document.querySelector("#result");

btn.addEventListener("click", leapYear);

function leapYear() {
  const year = inputField.value;

  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    resultDisplay.innerHTML = `<div class ="alert alert-success">This is a Leap Year!</div>`;
  } else {
    resultDisplay.innerHTML = `<div class ="alert alert-danger">This is not a Leap Year.</div>`;
  }
}
