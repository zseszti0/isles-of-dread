<?php
    Header("Location:index.php");
    $dbhost = "127.0.0.1";
    $dbuser = "root";
    $dbpwd = "";
    $dbname = "rpg";
    $connection = mysqli_connect($dbhost, $dbuser, $dbpwd, $dbname);
    $name = $_POST['username'];
    $password = $_POST['password'];

    $accountname = mysqli_query($connection, "SELECT name FROM accounts WHERE name === $name AND password === $password");
    $accountpassword = mysqli_query($connection, "SELECT password FROM accounts WHERE name === $name AND password === $password");

    session_start();
    $_SESSION['accountname'] = $accountname;
    $_SESSION['accountpassword'] = $accountpassword;
?>

