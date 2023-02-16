const form = document.querySelector("#name-input");
const blabla = document.querySelector("#name-output");

form.addEventListener("input", (event) => {
  console.log(form.value);
  if (form.value === "") {
    blabla.textContent = "Anonymous";
    console.log(blabla.textContent);
  } else {
    blabla.textContent = event.currentTarget.value;
    console.log(event.currentTarget.value);
  }
});
