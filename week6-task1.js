let count = 0;
const button = document.getElementById("button");
const counter = document.getElementById("number");

button.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
