// homework - Rock, paper, scissors game
// Implement a Rock, Paper, Scissors game. Make it have the interface in the attached screenshot.

// Requirements:
// User can click button to make own choice
// Computer chooses randomly (use Math.random, look up a solution on the internet)
// Tips:
// Icons are font awesome far fa-hand-rock, fa-hand-scissors and fa-hand-paper
// Have an event listener on each of the buttons for the user choice
// The event listener calls a function called runGame and passes it the user's choice as an argument
// runGame checks for the win condition (userChoice vs computerChoice) and displays the message to the user
// Bonus:
// Implement Rock, Paper, Scissors, Lizard, Spock (google it)
// Implement a scoreboard where you display the total of user wins, computer wins and draws

"use strict";
let playerScore = 0;
let computerScore = 0;
let noDraws = 0;

function displayScore() {
  document.getElementById("playerScore").innerText = playerScore;
  document.getElementById("computerScore").innerText = computerScore;
  document.getElementById("noDraws").innerText = noDraws;
}
function rock() {
  let computerChoice = generateRandomChoice();
  let ancaR;
  if (computerChoice === "paper") {
    document.getElementById(
      "result"
    ).innerText = `Computer has chosen ${computerChoice}   -> Computer wins`;
    document.getElementById("result").style.color = "red";
    computerScore++;
  } else if (computerChoice === "scissor") {
    document.getElementById(
      "result"
    ).innerText = `Computer has chosen  ${computerChoice}   -> Player wins`;
    document.getElementById("result").style.color = "green";
    playerScore++;
  } else {
    document.getElementById(
      "result"
    ).innerText = `Computer has chosen ${computerChoice}   -> this means draw`;
    document.getElementById("result").style.color = "grey";
    noDraws++;
  }
  displayScore();
}

function paper() {
  let computerChoice = generateRandomChoice();
  if (computerChoice === "rock") {
    document.getElementById(
      "result"
    ).innerText = `Computer has chosen ${computerChoice}   -> Player wins`;
    document.getElementById("result").style.color = "green";
    playerScore++;
  } else if (computerChoice === "scissor") {
    document.getElementById(
      "result"
    ).innerText = `Computer has chosen  ${computerChoice}   -> Computer wins`;
    document.getElementById("result").style.color = "red";
    computerScore++;
  } else {
    document.getElementById(
      "result"
    ).innerText = `Computer has chosen ${computerChoice}   -> this means draw`;
    document.getElementById("result").style.color = "grey";
    noDraws++;
  }
  displayScore();
}
function scissor() {
  let computerChoice = generateRandomChoice();
  if (computerChoice === "paper") {
    document.getElementById(
      "result"
    ).innerText = `Computer has chosen ${computerChoice}   -> Player wins`;
    document.getElementById("result").style.color = "green";
    playerScore++;
  } else if (computerChoice === "rock") {
    document.getElementById(
      "result"
    ).innerText = `Computer has chosen  ${computerChoice}   -> computer wins`;
    document.getElementById("result").style.color = "red";
    computerScore++;
  } else {
    document.getElementById(
      "result"
    ).innerText = `Computer has chosen ${computerChoice}   -> this means draw`;
    document.getElementById("result").style.color = "grey";
    noDraws++;
  }
  displayScore();
}
function generateRandomChoice() {
  let allPossibleChoices = ["rock", "paper", "scissor"];
  let randomIndex = Math.floor(Math.random() * 3);
  return allPossibleChoices[randomIndex];
}
