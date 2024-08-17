const choices = [`rock`, `paper`, `scissors`];
const playerDisplay = document.querySelector(`.playerDisplay`);
const computerDisplay = document.querySelector(`.computerDisplay`);
const resultDisplay = document.querySelector(`.resultDisplay`);
const scoreDisplay = document.querySelector(`.scoreDisplay`);
let computerScore = 0;
let playerScore = 0;

function playGame(playerChoices) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = ``;

  if (playerChoices === computerChoice) {
    result = `IT'S A TIE`;
  } else {
    switch (playerChoices) {
      case `rock`:
        result = computerChoice === `scissors` ? `YOU WIN` : `YOU LOSE`;
        break;
      case `paper`:
        result = computerChoice === `rock` ? `YOU WIN` : `YOU LOSE`;
        break;
      case `scissors`:
        result = computerChoice === `paper` ? `YOU WIN` : `YOU LOSE`;
        break;
    }
  }

  if (result === `YOU WIN`) {
    resultDisplay.style.color = `mediumspringgreen`;
    playerScore++;
  } else if (result === `YOU LOSE`) {
    resultDisplay.style.color = `crimson`;
    computerScore++;
  } else if (result === `IT'S A TIE`) {
    resultDisplay.style.color = `hsl(0, 0%, 15%)`;
  }

  resultDisplay.textContent = result;
  playerDisplay.textContent = `PLAYER: ${playerChoices}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  scoreDisplay.textContent = `${playerScore} : ${computerScore}`;
}
