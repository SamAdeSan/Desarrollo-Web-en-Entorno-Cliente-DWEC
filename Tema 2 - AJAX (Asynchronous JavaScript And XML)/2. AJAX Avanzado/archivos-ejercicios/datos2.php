<?php

$nombre = $_POST['nombre'];
$edad = $_POST['edad'];

if ($edad >= 18) {
    echo "Hola $nombre, eres mayor de edad";
} else {
    echo "Ey $nombre, todavía eres menor, disfrútalo";
}

?>