const valueNum = document.querySelector(".valueNum");
const buttons = document.querySelectorAll(".btn");
const canUserDecide = document.querySelector(".by-user");

let num = 0; // value change always so we use let

// each and every button we use forEach loop
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const numValue = e.target.classList;
    const userDecideVal = parseInt(canUserDecide.value);

    if (numValue.contains("decrement")) {
      num = num - userDecideVal;
    } else if (numValue.contains("increment")) {
      num = num + userDecideVal;
    } else {
      num = 0;
    }

    valueNum.textContent = num; // update the Value number

    // for changing color of number count
    if (num > 0) {
      valueNum.style.color = "green";
    } else if (num < 0) {
      valueNum.style.color = "red";
    } else {
      valueNum.style.color = "black";
    }
  });
});
