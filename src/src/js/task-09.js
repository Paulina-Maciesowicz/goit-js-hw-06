const btn = document.querySelector(".change-color");
const chageColor = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btn.addEventListener("click", anotherColor);
function anotherColor() {
  chageColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}

anotherColor();
