const choices = document.querySelectorAll(".container span");
const statusMessage = document.querySelector("#statusMessage");
const gameStatusBG = document.querySelector(".game-status");
const restartGameBtn = document.querySelector(".restartGame");
let userScoreCount = document.querySelector("#userScoreCount");
let computerScoreCount = document.querySelector("#compScoreCount");

let userScore = 0;
let computerScore = 0;

// // computer choice
function generateComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
}

// // play game
const playGame = (userChoice) => {
  const computerChoice = generateComputerChoice();
  //   console.log("user choice is ", userChoice);
  //   console.log("computer choice is ", computerChoice);

  // // Game Draw Message
  const gameDraw = () => {
    statusMessage.textContent = `Your choice ${userChoice}. Computer choice ${computerChoice} | Draw!`;
    gameStatusBG.style.backgroundColor = "Purple";
  };

  if (userChoice === computerChoice) {
    gameDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // computer have 2 choices scissors and paper otherwise game draw
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // computer have 2 choices rock and scissors otherwise game draw
      userWin = computerChoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      // computer have 2 choices rock and paper otherwise game draw
      userWin = computerChoice === "rock" ? false : true;
    }
    gameWinner(userWin, userChoice, computerChoice);
  }
  restartGameBtn.style.display = "block";
};

// // Game Status Message
const gameWinner = (userWin, userChoice, computerChoice) => {
  if (userWin == true) {
    statusMessage.textContent = `Your choice ${userChoice}. Computer choice ${computerChoice} | You Win!`;
    gameStatusBG.style.backgroundColor = "Green";
    userScore++;
    userScoreCount.textContent = userScore;
  } else {
    statusMessage.textContent = `Your choice ${userChoice}. Computer choice ${computerChoice} | Computer Win!`;
    gameStatusBG.style.backgroundColor = "Red";
    computerScore++;
    computerScoreCount.textContent = computerScore;
  }
};

// // user choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

restartGameBtn.addEventListener("click", () => {
  statusMessage.textContent = ``;
  gameStatusBG.style.backgroundColor = "transparent";

  userScore = 0;
  computerScore = 0;
  userScoreCount.textContent = 0;
  computerScoreCount.textContent = 0;
});
