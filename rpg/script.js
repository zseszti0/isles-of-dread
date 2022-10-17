let mainMenu = document.getElementById("mainMenu")
let info = document.getElementById("info")
let accountlogin = document.getElementById("accountlogin")
let accountsignup = document.getElementById("accountsignup")

function signUp(){
    mainMenu.style.display = "none"
    info.style.display = "block"
    accountlogin.style.display = "none"
    accountsignup.style.display = "block"

}

function logIn(){
    mainMenu.style.display = "none"
    info.style.display = "block"
    accountlogin.style.display = "block"
    accountsignup.style.display = "none"
}

function newGame(){
    logIn()
}
