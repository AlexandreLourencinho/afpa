<?php
include_once '../../model/login/session_destroy.php';
?>
<?php
session_destroy();
header('location: ../../index.php');
?>