<?php
    $dbhost = "127.0.0.1";
    $dbuser = "root";
    $dbpwd = "";
    $dbname = "rpg";

    $connection = mysqli_connect($dbhost, $dbuser, $dbpwd, $dbname);
    $name = $_POST['name'];
    $password = $_POST['password'];
    
    if($name<>"" && $password<>"" && mysqli_query($connection, "SELECT name FROM stats WHERE name IN ('$name')") === ""){
        mysqli_query($connection, "INSERT INTO stats VALUES('$name', '$password', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null)");
    }
    Header("Location:index.html");