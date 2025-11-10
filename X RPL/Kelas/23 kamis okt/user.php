<?php 
    if (!isset($_SESSION ['email']))
        header("location: index.php")
?>

<h1>selamat datang <?php $_SESSION ['email']?></h1>

