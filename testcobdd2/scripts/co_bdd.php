<?php

$host = "localhost";
$db = "hotel";
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
    echo "<h1 class='text-danger'>LA CONNEXION A LA BASE DE DONNEE N'A PAS PU ÊTRE ETABLIE.<br>
    Veuillez contacter un administrateur</h1>";
    // throw new PDOException($e->getMessage());
}
require_once "crud.php";
$crud = new crud($pdo);


?>