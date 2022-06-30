import { signup } from "../../firebase/auth.js";
import { auth } from "../../firebase/init.js";
export const signUp = () => {
    const divSignUp = document.createElement("div");

    const viewSignUp = //html
    `
        <div class="container-signUp">
            <div class ="sub-container">
                <div class="container-s-logo-ticket"><img class="s-logo-ticket" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-removebg-preview.png?raw=true" alt="logo-ticket"></div>
                <h2>Create your account</h2>
                <form class="form-type">
                    <label><input type="text" id="user" required placeholder="User Name"></label>
                    <label><input type="email" id="email" autocomplete="on" placeholder="email@something.com"></label>
                    <label><input type="password" id="password" autocomplete="current-password" required placeholder="password"></label>
                    <p>Do you already have an account?<a href="#/login">Login</a></p>
                    <div class="container-btn">
                        <button type="submit" class="btn-create">Create</button>
                        <button class="btn"><a href="#/" >Cancel</a></button>
                    </div>
                </form>
            </div>
        </div>            
    `
    divSignUp.innerHTML = viewSignUp;

    const btn = divSignUp.querySelector(".btn-create")
    btn.addEventListener("click", async (e) => {
        e.preventDefault();
        const email = divSignUp.querySelector("#email").value;
        const password = divSignUp.querySelector("#password").value;
        signup(auth, email, password);
    })
    return divSignUp;
}
