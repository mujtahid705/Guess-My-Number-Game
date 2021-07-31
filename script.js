"use strict";

let secretNum = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", () => {
  let guess = Number(document.querySelector(".guess").value);

  //No Input
  if (!guess) {
    displayMessage("❌ No Number!");
  } //guess is right
  else if (guess === secretNum) {
    displayMessage("🎉 Correct Number!");
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector(".highscore").textContent = highScore;

    document.querySelector("body").classList.add("win-class");
    document.querySelector(".number").textContent = secretNum;

    //Guess is wrong
  } else if (guess !== secretNum) {
    if (score > 0) {
      displayMessage(guess > secretNum ? "Too High!" : "Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost❗");
      score = 0;
      document.querySelector(".score").textContent = score;
    }
  }
  // else if (guess < secretNum) {
  //   document.querySelector(".message").textContent = "Too Low!";
  //   score--;

  //   if (score <= 0) {
  //     document.querySelector(".message").textContent = "You Lost❗";
  //     score = 0;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".score").textContent = score;
  //   }

  //   //Too High
  // } else {
  //   document.querySelector(".message").textContent = "Too High!";
  //   score--;

  //   if (score <= 0) {
  //     document.querySelector(".message").textContent = "You Lost❗";
  //     score = 0;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".score").textContent = score;
  //   }
  // }
});

//Again Button (RESET)
document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");

  secretNum = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";
  document.querySelector("body").classList.remove("win-class");
});
