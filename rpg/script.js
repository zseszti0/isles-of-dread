let info = document.getElementById("info")
let accountlogin = document.getElementById("accountlogin")
let accountsignup = document.getElementById("accountsignup")

let signtext = document.getElementById("signText")
let logtext = document.getElementById("logText")
let savefiles = document.getElementById("savefiles")

function signUp(){
    info.style.display = "block"
    accountlogin.style.display = "none"
    accountsignup.style.display = "block"
    logtext.style.display = "none"
    signtext.style.display = "block"
    savefiles.style.display = "none"

}

function logIn(){
    logtext.style.display = "block"
    signtext.style.display = "none"
    info.style.display = "block"
    accountlogin.style.display = "block"
    accountsignup.style.display = "none"
    savefiles.style.display = "none"
}

function showSaveFiles(){
    logtext.style.display = "none"
    signtext.style.display = "none"
    info.style.display = "block"
    accountlogin.style.display = "none"
    accountsignup.style.display = "none"
    savefiles.style.display = "flex"
}

function save(){

}

function save1(){

}

function save2(){
    
}

function save3(){
    
}

logIn()