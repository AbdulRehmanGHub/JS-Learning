const display = document.querySelector("input");
const btns = document.querySelectorAll("button");

let str = "";

let btnArray = Array.from(btns);

btnArray.forEach((btn) => {
  // console.log(btn);
  btn.addEventListener("click", (e) => {
    // console.log(e.target.innerHTML);

    if (e.target.innerHTML === "DEL") {
      str = str.substring(0, str.length - 1);
      display.value = str;
    } else if (e.target.innerHTML === "AC") {
      str = "";
      display.value = str;
    } else if (e.target.innerHTML === "=") {
      str = eval(str);
      display.value = parseFloat(str).toFixed(2);
    } else {
      str += e.target.innerHTML;
      display.value = str;
    }
  });
});

// console.log(btnArray);
