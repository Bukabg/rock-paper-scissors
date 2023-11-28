// Function to get computer's choice
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
  // Make player's selection case-insensitive
  playerSelection = playerSelection.toLowerCase();

  // Check for a tie
  if (playerSelection === computerSelection.toLowerCase()) {
    return "It's a tie! Try again.";
  }

  // Check for winning conditions
  if (
    (playerSelection === 'rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'paper' && computerSelection === 'Rock') ||
    (playerSelection === 'scissors' && computerSelection === 'Paper')
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    // If not a tie and not a win, then it's a loss
    return `You Lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

// Test the functions
const playerSelection = 'Rock'; // You can change this to test different inputs
const computerSelection = getComputerChoice();

console.log(`Player: ${playerSelection}`);
console.log(`Computer: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));
// Function to play a best-of-five game
function game() {
  let playerWins = 0;
  let computerWins = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}:`);

    const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
    const computerSelection = getComputerChoice();

    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);

    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    // Update overall results
    if (result.includes("Win")) {
      playerWins++;
    } else if (result.includes("Lose")) {
      computerWins++;
    }
  }

  // Display overall results
  console.log("\nGame Over!");
  console.log(`Player Wins: ${playerWins}`);
  console.log(`Computer Wins: ${computerWins}`);

  if (playerWins > computerWins) {
    console.log("Congratulations! You are the overall winner!");
  } else if (playerWins < computerWins) {
    console.log("Sorry, you lost the game.");
  } else {
    console.log("It's a tie overall. Good game!");
  }
}

// Test the game
game();
