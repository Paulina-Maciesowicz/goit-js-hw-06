const input = document.querySelector("#validation-input");
// const valid = document.querySelector("#validation-input.valid");
// const invalid = document.querySelector("#validation-input.invalid");

input.addEventListener("blur", (event) => {
  console.log(input.value.length);
  if (input.value.length <= 6) {
      input.classList.add("valid");
      input.classList.remove("invalid");
    console.log(input.classList);
  } else {
      input.classList.add("invalid");
    //   input.classList.remove("valid");
    console.log(input.classList);
  }
});
