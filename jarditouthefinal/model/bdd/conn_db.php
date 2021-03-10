<?php

$host = "localhost";
$db = "jarditou";
$user = "root";
$pass = "";
$charset = "utf8";

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
try{
    $pdo =  new PDO($dsn, $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "hello dB!";
}
catch(PDOException $e)
{
    echo "<h1 class='text-danger'>PAS DE BDD</h1>";
    // throw new PDOException($e->getMessage());
}

//$user = new user($pdo);

//$user->insertUser("admin", "mdp");
?>