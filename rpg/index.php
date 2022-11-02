<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="rpg.css">
    <title>RPG</title>
</head>
<body>
    <div id = "title">
        <h1>Isles of Dread</h1>
        <h2>Fighting the monster called destiny</h2>
    </div>
    <div id = "info">
        <div id = "accountlogin">
            <p id="logText">Log into your account</p>
            <form action="login.php" method = "post">
                <input placeholder="Username" type="text" name="username" id="username"><br>
                <input placeholder="Password" type="password" name="password" id="password"><br>
                <input value="Log In" type="submit" onclick="showSaves()">
            </form>
            <div onclick = "signUp()" id = "noaccount">I don't have an account</div>
        </div>
        <div id = "accountsignup">
            <p id="signText">Make an account</p>
            <form action="signup.php" method = "post">
                <input placeholder="Username" type="text" name="newusername" id="newusername"><br>
                <input placeholder="Password" type="password" name="newpassword" id="newpassword"><br>
                <input value="Sign Up" type="submit">
            </form>
        </div>
        <div id = "savefiles">
            <form action="save1.php" method="post">
                <input type="submit" id ="savefile1" class="savefiles" value="+">
            </form>
            <form action="save2.php" method="post">
                <input type="submit" id ="savefile2" class="savefiles" value="+">
            </form>
            <form action="save3.php" method="post">
                <input type="submit" id ="savefile3" class="savefiles" value="+">
            </form>
        </div>
    </div>
    <script type="text/javascript">
    let info = document.getElementById("info")
    let accountlogin = document.getElementById("accountlogin")
    let accountsignup = document.getElementById("accountsignup")

    let signtext = document.getElementById("signText")
    let logtext = document.getElementById("logText")
    let savefiles = document.getElementById("savefiles")
    let accountname = <?php session_start(); $_SESSION['accountname']; ?>


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
        console.log("fassssz")

    }

    function showSaves(){
        if(accountname != ""){
            logtext.style.display = "none"
            signtext.style.display = "none"
            info.style.display = "block"
            accountlogin.style.display = "none"
            accountsignup.style.display = "none"
            savefiles.style.display = "flex"
            console.log("hihihihihihihi")
        }else{
            console.log("hiba van a matrixban")
        }
    }
</script>
<?php
        function save1(){
            
        }

        function save2(){
            
        }

        function save3(){
            
        }
?>
</body>
</html>