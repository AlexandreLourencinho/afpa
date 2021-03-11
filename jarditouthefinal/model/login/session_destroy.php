<?php
include_once 'session_start.php';
session_destroy();
header('location: ../../index.php');
?>