<form action="" method="POST">
    tanggal:
    <input type="number" name="tanggal" placeholder="masukan tanggal">
    bulan:
    <input type="number" name="bulan" placeholder="masukan bulan">

    <input type="submit"name="kirim" value="zodiak anda">
</form>

<?php 

if (isset($_POST['kirim'])) {
    $tanggal = $_POST['tanggal'];
    $bulan = $_POST['bulan'];

    zodiak ($bulan,$tanggal);
}

    function belajar () {
        echo "hari ini saya belajar function ";
    }



    function cektanggal($tanggal) {

    if($tanggal > 0 && $tanggal < 31) {
        echo "tanggal benar";
    } else {
        echo "tanggal salah";
    }
    }

    cektanggal(1);
    cektanggal(0);
    cektanggal(10);

    $tanggal = 15;
    $bulan = 2;
    function zodiak($bulan, $tanggal) {

    if ($tanggal > 0 && $tanggal < 32 && $bulan > 0 && $bulan < 12) {

        // zodiak()

        if($bulan == 1){
            if ($tanggal > 0 && $tanggal < 20) {
                echo "zodiak anda capicorn";
            }else{
                echo "zodiak anda aquarius";
            }
        }

        if ($bulan == 2){
            if ($tanggal > 0 && $tanggal < 20) {
                echo "zodiak anda pisces";
            }else{
                echo "zodiak anda aries";
            }
        }

        if($bulan == 3) {
            if ($tanggal > 0 && $tanggal < 20) {
                echo "zodiak anda taurus";
            }else{
                echo "zodiak anda gemini";
            }
        }

        if($bulan == 4) {
            if ($tanggal > 0 && $tanggal < 20){
                echo "zodiak anda cancer";
            }else{
                echo "zodiak anda leo";
            }
        }

        if($bulan == 5) {
            if ($tanggal > 0 && $tanggal < 20){
                echo "zodiak anda virgo";
            }else{
                echo "zodiak anda libra";
            }
        }

        if ($bulan == 6){
            if ($tanggal > 0 && $tanggal < 20){
                echo"zodiak anda scorpio";
            }else{
                echo"zodiak anda sagitarius";
            }
        }


    }else {
        echo "tanggal atau bulan salah";
    }
}




    function cekbulan($bulan) {
        if ($bulan > 0 && $bulan < 13) {
            return true;
        } else {
            return false;
        }
    }

    cekbulan(0);

    if (cekbulan(0)) {
        echo "bulan salah";
    }else{
        echo "bulan benar";
    }

    function luaspersegi($p,$l) {
        $luas = $p * $l;
        return $luas;
    }

    echo luaspersegi(5,3) * 15;
?>