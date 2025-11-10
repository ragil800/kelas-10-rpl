<?php
$menu = ["Profil", "Kesiswaan", "Bimbel", "Berita", "Artikel", "Buku tamu", "Kontak"];
$profil = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias et, inventore, mollitia quaerat nemo ducimus quia nobis qui cum perferendis animi sequi ab facere ullam dolorem a repudiandae asperiores soluta accusamus maxime, sit corrupti quisquam totam neque? Ipsum, dolorum velit cum minus, sapiente beatae quo quia dignissimos ducimus aperiam quidem?";
$img = "../img/tv.avif";

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile SMPN 5 SIDOARJO</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
</head>

<body>
    <div>
        <div>
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Bilal</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="../tugas.php"><?= $menu[3] ?></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="kesiswaan.php"><?= $menu[1] ?></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="bimbel.php"><?= $menu[2] ?></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="profile.php"><?= $menu[0] ?></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="artikel.php"><?= $menu[4] ?></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="buku_tamu.php"><?= $menu[5] ?></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="kontak.php"><?= $menu[6] ?></a>
                            </li>
                    </div>
                </div>
            </nav>
        </div>
        <div>
            <h2>Profil</h2>
            <p><?= $profil ?></p>
        </div>
        <div>
            <img src=<?= $img ?>>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>