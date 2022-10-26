<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="rpg.css">
    <link rel="stylesheet" href="https://fonts.google.com/specimen/Shalimar">
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
                <input value="Log In" type="submit" onclick="showSaveFiles()">
            </form>
            <div onclick = "signUp()" id = "noaccount">I don't have an account</div>
        </div>
        <div id = "accountsignup">
            <p id="signText">Make an account</p>
            <form action="signup.php" method = "post">
                <input placeholder="Username" type="text" name="username" id="username"><br>
                <input placeholder="Password" type="password" name="password" id="password"><br>
                <input value="Sign Up" type="submit" onclick="logIn()">
            </form>
        </div>
        <div id = "savefiles">
            <div id = "savefile1" class = "savefiles" onclick = "save1()">+</div>
            <div id = "savefile2" class = "savefiles" onclick = "save2()">+</div>
            <div id = "savefile3" class = "savefiles" onclick = "save3()">+</div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>