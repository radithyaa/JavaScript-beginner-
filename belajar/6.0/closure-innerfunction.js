// A function define inside of another function
// the purpose is for security reason

function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }
  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
  }
  function getScore() {
    return score;
  }

  return { increaseScore, decreaseScore, getScore };
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.increaseScore(60);
game.decreaseScore(3);
game.decreaseScore(38);
console.log(`The final score is ${game.getScore()}pts`);
