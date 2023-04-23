// Validate username and password
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "project") {    // use username as user and password as project for login
        alert("You have successfully logged in.");
        window.location.href = 'resume.html';
    } else {
      alert('Invalid username/password'); // Print error message
    }
})
window.history.forward();
        function noBack() {
            window.history.forward();
        }
