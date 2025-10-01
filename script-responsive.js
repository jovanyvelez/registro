const container = document.querySelector('.container');
const btnSignIn = document.getElementById("btn-sign-in"); 
const btnSignUp = document.getElementById("btn-sign-up");
const btnSignInMobile = document.getElementById("btn-sign-in-mobile");
const btnSignUpMobile = document.getElementById("btn-sign-up-mobile");

// Botones del panel de bienvenida (desktop)
if (btnSignIn) {
    btnSignIn.addEventListener("click", () => {
        container.classList.remove("toggle");
    });
}

if (btnSignUp) {
    btnSignUp.addEventListener("click", () => {
        container.classList.add("toggle");  
    });
}

// Botones para móviles
if (btnSignInMobile) {
    btnSignInMobile.addEventListener("click", () => {
        container.classList.remove("toggle");
    });
}

if (btnSignUpMobile) {
    btnSignUpMobile.addEventListener("click", () => {
        container.classList.add("toggle");
    });
}
