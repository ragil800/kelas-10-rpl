<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
</head>
<body>
    <div>
        <nav class="collapse navbar-collapse" id="menu">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="?menu=profil">profil</a></li>
                <li class="nav-item"><a class="nav-link" href="?menu=sejarah">sejarah</a></li>
                <li class="nav-item"><a class="nav-link" href="?menu=jurusan">jurusan</a></li>
                <li class="nav-item"><a class="nav-link" href="?menu=prestasi">prestasi</a></li>
                <li class="nav-item"><a class="nav-link" href="?menu=kegiatan">kegiatan</a></li>
                <li class="nav-item"><a class="nav-link" href="?menu=kontak">kontak</a></li>
            </ul>
            <section>
                <?php
                $isi = "";
                if (isset($_GET["menu"])) {
                    $isi = $_GET["menu"];
                }

                if ($isi == "sejarah") {
                    require_once "pages/sejarah.php";
                } elseif ($isi == "profil") {
                    require_once "pages/profil.php";
                } elseif ($isi == "jurusan") {
                    require_once "pages/jurusan.php";
                } elseif ($isi == "prestasi") {
                    require_once "pages/prestasi.php";
                } elseif ($isi == "kegiatan") {
                    require_once "pages/kegiatan.php";
                } elseif ($isi == "kontak") {
                    require_once "pages/kontak.php";
                }

                if (isset($_POST["tombol"])) {
                    $nama = $_POST["nama"];
                    $pesan = $_POST["pesan"];
                    $email = $_POST["email"];

                    echo $nama;
                    echo "<br>";
                    echo $pesan;
                    echo "<br>";
                }
                ?>
                <footer>
                    <p>ragil</p>
                </footer>
            </section>
        </nav>
    </div>
</body>
</html>
