<?php
    Header("Location:index.php");
    $dbhost = "127.0.0.1";
    $dbuser = "root";
    $dbpwd = "";
    $dbname = "rpg";

    $connection = mysqli_connect($dbhost, $dbuser, $dbpwd, $dbname);
    $name = $_POST['newusername'];
    $password = $_POST['newpassword'];

    if($name<>"" && $password<>"" && $name<>mysqli_query($connection, "SELECT name FROM accounts WHERE name === $name")){
        mysqli_query($connection, "INSERT INTO accounts (name, password) VALUES('$name', '$password')");
        session_start();
        $_SESSION['name'] = $name;
        $_SESSION['password'] = $password;
    }
?>