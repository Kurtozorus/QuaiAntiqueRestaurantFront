const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
    // Ici, il faudrat appeler l'API pour vérifier les credentials en BDD

    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){ 
        // Il faudra récupérere le vrai token
        const token = "erkazehrmklazehrklazem23165earaz";
        setToken(token);
        // Placer ce token en cookie
        
        setCookie(RoleCookieName, "admin", 7);
        window.location.replace("/");

    }else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
        alert("Les identifiants sont incorrects.");
    }
}