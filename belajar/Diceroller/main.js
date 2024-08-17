function rollDice() {
  const numOfDice = document.querySelector(`.numOfDice`).value;
  const diceResult = document.querySelector(`.diceResult`);
  const diceImages = document.querySelector(`.diceImages`);
  const Values = [];
  const Images = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    Values.push(value);
    Images.push(
      `<img src="Images/${value}.png" height="200px" alt="Dice ${value}">`
    );
  }

  diceResult.textContent = `Num Of Dice : ${Values}`;
  diceImages.innerHTML = Images;
}
