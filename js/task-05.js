const form = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

form.addEventListener("input", (event) => {
  console.log(form.value);
  if (form.value === "") {
    nameOutput.textContent = "Anonymous";
    console.log(nameOutput.textContent);
  } else {
    nameOutput.textContent = event.currentTarget.value;
    console.log(event.currentTarget.value);
  }
});
