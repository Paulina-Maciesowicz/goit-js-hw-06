let counterValue = 0;
const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');

const handleDecrement = () => {
  counterValue = counterValue - 1;
  document.getElementById("value").innerHTML = counterValue;
};
btnMinus.addEventListener("click", handleDecrement);

const handleIncrement = () => {
  counterValue = counterValue + 1;
  document.getElementById("value").innerHTML = counterValue;
};
btnPlus.addEventListener("click", handleIncrement);
