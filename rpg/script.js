let mainMenu = document.getElementById("mainMenu")
let info = document.getElementById("info")
let accountlogin = document.getElementById("accountlogin")
let accountsignup = document.getElementById("accountsignup")

let signtext = document.getElementById("signText")
let logtext = document.getElementById("logText")

function signUp(){
    mainMenu.style.display = "none"
    info.style.display = "block"
    accountlogin.style.display = "none"
    accountsignup.style.display = "block"
    logtext.style.display = "none"
    signtext.style.display = "block"

}

function logIn(){
    logtext.style.display = "block"
    signtext.style.display = "none"
    mainMenu.style.display = "none"
    info.style.display = "block"
    accountlogin.style.display = "block"
    accountsignup.style.display = "none"
}

function newGame(){
    logIn()
}
