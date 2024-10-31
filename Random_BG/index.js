const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
let colorNumber = document.querySelector(".colorNumber");

let runningState;

startBtn.addEventListener("click", () => {
  if (!runningState) {
    runningState = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
      colorNumber.innerHTML = randomColor();
    }, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(runningState);
  runningState = null;
});
