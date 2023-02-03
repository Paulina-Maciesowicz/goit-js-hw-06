const lever = document.querySelector("#font-size-control");
const abra = document.querySelector("#text");

lever.addEventListener("input", () => {
    console.log(lever.value);
    abra.style.fontSize = lever.value + "px";
})