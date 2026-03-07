const inputText = document.getElementById("input-text");
const inputPassword = document.getElementById("input-password");

// login form !important
document.getElementById("login-btn").addEventListener("click", () => {
  const userName = inputText.value.toLowerCase();
  const userPassword = inputPassword.value;
  if (userName == "admin" && userPassword == "admin123") {
    alert("Sign In successful");
    window.location.assign("./index.html");
  } else {
    alert("Please Sign In With Proper Name or Password");
  }
});