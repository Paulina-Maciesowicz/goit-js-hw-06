const btn = document.querySelector(".change-color");
const chageColor = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
btn.addEventListener("click", anotherColor);
function anotherColor() {
  const color = getRandomHexColor();
  chageColor.textContent = color;
  document.body.style.backgroundColor = color;
}
anotherColor();
