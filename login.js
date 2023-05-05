const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const new1 = document.getElementById("login-form-reg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } 
    else if (username == null && password == null) {
        alert("Please enter the details");
    } 
    else {
        loginErrorMsg.style.opacity = 1;
    }
   
})
