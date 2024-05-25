const logoImage = document.getElementById("logo-img");
function redirectToProject() {
    window.open("https://netnet78.github.io/");
};
logoImage.addEventListener("click", redirectToProject);

const userData = () => {
    let username = document.getElementById("username").textContent;
    let password = document.getElementById("password").textContent;
    let confirmPass = document.getElementById("confirmPassword").textContent;
    if (username.length > 2) {
        if (password.length > 7) {
            if (password === confirmPass) {
                console.log("Sign up successful!");
            } else {
                console.log("Sign up failed!");
            }
        } else {
            console.log("Password must be 8 charaters long or more");
        }
    } else {
        console.log("Username must be 3 characters long or more")
    }
}