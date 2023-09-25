const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "There is a draw"
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "Player Wins! Rock Beats Scissors"
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "Player Wins! Paper Beats Rock"
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "Player Wins! Scissors Beats Paper"
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Player Loses! Rock Beats Scissors"
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Player Loses! Paper Beats Rock"
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Player Loses! Scissors Beats Paper"
  } else {
    return "Please enter valid text"
  }
}

const playerSelection = prompt("enter selection").toLowerCase();
const computerSelection = getComputerChoice();

console.log("Player's Selection is: " + playerSelection)
console.log("Computer's Selection is: " + computerSelection)
console.log(playRound(playerSelection, computerSelection))
