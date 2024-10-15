const form = document.getElementById("signupForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", (e) => {
  const username = usernameInput.value;
  const password = passwordInput.value;
  let errors = [];

  if (username.length < 5) {
    errors.push("Username must be at least 5 characters long.");
  }
  if (password.length < 8) {
    errors.push("Password must be at least 8 characters long.");
  }

  if (errors.length > 0) {
    e.preventDefault();
    errorMessage.innerHTML = errors.join("<br>");
  } else {
    errorMessage.textContent = "";
  }
});
