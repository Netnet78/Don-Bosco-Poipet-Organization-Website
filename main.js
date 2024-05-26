const logoImage = document.getElementById("logo-img");
// Shortcut for storing image without having to write DOM element
function redirectToProject() { // When called this function will redirect the user in the following link:
    window.open("https://netnet78.github.io/");
};
logoImage.addEventListener("click", redirectToProject);
// Adding functionality to redirect user to another website when click