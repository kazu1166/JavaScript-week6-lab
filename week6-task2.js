const keyCode = document.getElementById("keyCode");
const keyValue = document.getElementById("keyValue");

document.addEventListener("keydown", (e) => {
  keyCode.textContent = e.keyCode;
  keyValue.textContent = e.key === " " ? "Space" : e.key;
});
