const login= document.getElementById("login-head");
const register= document.getElementById("register-head");
const registerInput=document.getElementById("register-input");

register.onclick=()=>{
    registerInput.classList.remove("hide");
    register.classList.add("prime-color");
    login.classList.remove("prime-color");
}
login.onclick=()=>{
    registerInput.classList.add("hide");
    register.classList.remove("prime-color");
    login.classList.add("prime-color");
}