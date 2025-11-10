<?php 
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <div>
            <ul>
                <li><a href="?menu=home">home</a></li>
                <?php 
                if (isset($_SESSION['email'])){
                ?>
                <li><a href="?menu=register">register</a></li>
                <li><a href="?menu=login">login</a></li>
                <?php 
                }else{
                ?>
                <li><a href="?menu=logout">log out</a></li>
                <li><a href="?menu=user">user</a></li>
                <?php 
                }
                ?>
            </ul>
        </div>
        <div>
            <?php 
            if (isset($_GET["menu"])) {
                $isi = $_GET['menu'];

            if ($isi == "register") {
                require_once "register.php";
            }

            if ($isi == "login") {
                require_once "login.php";
            }

            if ($isi == "logout") {
                require_once "logout.php";
            }

            if ($isi == "user") {
                require_once "user.php";
            }

            if ($isi == "home") {
                require_once "index.php";
            }

        }
            ?> 
        </div>
    </div>
</body>
</html>















