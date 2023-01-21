const form = document.querySelector("#name-input");
const blabla = document.querySelector("#name-output");

form.addEventListener("input", (event) => {
blabla.textContent = event.currentTarget.value;
});


// form.addEventListener("input", (event) => {
//   if (form.textContent === "") {
    
//     } else {
//     blabla.textContent = event.currentTarget.value;
// });