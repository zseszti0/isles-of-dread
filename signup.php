<?php
    $dbhost = "127.0.0.1";
    $dbuser = "root";
    $dbpwd = "";
    $dbname = "rpg";

    $connection = mysqli_connect($dbhost, $dbuser, $dbpwd, $dbname);
    $name = $_POST['username'];
    $password = $_POST['password'];
    
    if($name<>"" && $password<>""){
        mysqli_query($connection, "INSERT INTO stats (name, password) VALUES('$name', '$password')");
    }
    Header("Location:index.php");
?>