const btn = document.querySelector(".change-color");
const chageColor = document.querySelector(".color");

btn.addEventListener("click", anotherColor);
function anotherColor() {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  document.body.style.backgroundColor = getRandomHexColor();
  chageColor.textContent = document.body.style.backgroundColor;
}

anotherColor();
