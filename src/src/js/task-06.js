const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  console.log(input.value.length);
  if (input.value.length === 6) {
    input.classList.add("valid");
    input.classList.remove("invalid");
    console.log(input.classList);
  } else {
    input.classList.add("invalid");
    console.log(input.classList);
  }
});
