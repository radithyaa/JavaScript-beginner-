const myBox = document.querySelector(`.myBox`);
const moveAmount = 25;
let x = 0;
let y = 0;
let bgColor = `aquamarine`;
let boxContent = `😁`;

document.addEventListener(`keydown`, (event) => {
  event.preventDefault();
  if (event.key.startsWith(`Arrow`)) {
    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }

    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
  }
});

myBox.addEventListener(`click`, () => {
  switch (bgColor) {
    case `aquamarine`:
      bgColor = `gold`;
      boxContent = `🤕`;
      break;
    case `gold`:
      bgColor = `indianred`;
      boxContent = `😵`;
      break;
    case `indianred`:
      bgColor = `aquamarine`;
      boxContent = `😁`;
      break;
  }

  myBox.style.backgroundColor = bgColor;
  myBox.textContent = boxContent;
});
