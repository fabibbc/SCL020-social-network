import { logIn, signInGoogle } from "../../firebase/auth.js";


export const login = () => {
    const divLogin = document.createElement("div");

    const viewLogin = //html 
    `
        <div class="container-login"> 
            <div class ="sub-container">
                <div class="containter-s-logo-ticket"><img class ="s-logo-ticket" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-removebg-preview.png?raw=true" alt="logo-ticket"></div>
                <h2>Login to your account</h2>
                <form class="form-type">
                    <label><input type="text" id="email"  placeholder="email@something.com" autocomplete="on"></label>
                    <label><input type="password" id="password"  placeholder="password" autocomplete="current-password"></label>
                    <a class="btn-g-login" id="loginGoogle"><img class ="logo-google" src="https://raw.githubusercontent.com/fabibbc/SCL020-social-network/main/src/img/sign%20in%20with%20google.png"></a>
                    <p>You are not registered yet?<a href="#/age">Create Account</a></p>
                    <button id="btn" class="btn"> Login </button>
                </form>
            </div>
        </div>     
    `
    divLogin.innerHTML = viewLogin;    

    const btnGoogle = divLogin.querySelector("#loginGoogle");
    btnGoogle.addEventListener("click", ()=> {
        signInGoogle()
    });

    const btn = divLogin.querySelector("#btn")
    btn.addEventListener("click", (e) => {
        e.preventDefault()
    
        const email = divLogin.querySelector("#email").value;
        const password = divLogin.querySelector("#password").value;
        logIn(email, password);       
    });
    return divLogin;
};
