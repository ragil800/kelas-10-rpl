belajar php

<h1>saya belajar php</h1>
<?php 
$nama = "ragil";
$kelas = 10;
$hobi = "tidur";
$alamat = " Jl. mayjend sungkono no 5";
$umur = 16;
$cita_cita = "progammer";
$enter = "<br />";

echo $nama;
echo $enter;
echo $kelas;
echo $enter;
echo $hobi;
echo $enter;
echo $alamat;
echo $enter;
echo $umur;
echo $enter;
echo $cita_cita;
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Web Bilal</title>
</head>
<body>
	<div>
		<h1>Identitas: </h1>
		<table>
			<tbody>
				<tr>
					<td>Nama</td>
				</tr>
				<tr>
					<td><?= $nama ?></td>
				</tr>
				<tr>
					<td>Kelas</td>
				</tr>
				<tr>
					<td><?= $kelas ?></td>
				</tr>
				<tr>
					<td>Hobi</td>
				</tr>
				<tr>
					<td><?= $hobi ?></td>
				</tr>
				<tr>
					<td>Alamat</td>
				</tr>
				<tr>
					<td><?= $alamat ?></td>
				</tr>
				<tr>
					<td>Umur</td>
				</tr>
				<tr>
					<td><?= $umur ?></td>
				</tr>
				<tr>
					<td>Cita cita</td>
				</tr>
				<tr>
					<td><?= $cita_cita ?></td>
				</tr>
			</tbody>
		</table>
	</div>
</body>
</html>