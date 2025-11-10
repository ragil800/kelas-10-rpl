<?php 
session_start()
?>

<h1>login</h1>

<form action="" method="post">
    <input type="email" name="email" placeholder="email"> <br>
    <input type="pasword" name="pasword" placeholder="pasword"> <br>
    <input type="submit" value="login" name="login">
</form>

<?php 
if (isset($_POST['login']))
    $email - $_POST['email'];
    $pasword - $_POST['pasword'];

    if ($email == "admin@gmail.com" && $pasword == "1234"){
        $_SESSION['email'] = $email;
        header("location: index.php");
    }else{
        echo ("login gagal");
    }
?>