<?php
session_start();

if (!isset($_SESSION['login']) || $_SESSION['login'] !== "SI") {
    header("Location: login.php");
    exit;
} else {
    // Verfy Time
    $tiempoActual = time();
    $tiempoInicio = $_SESSION['acceso'];
    $tiempoTranscurrido = $tiempoActual - $tiempoInicio;

    // Si han pasado más de 5 minutos, redirigir a la página de login
    $tiempoMaximo = 5 * 60; // 5 minutos en segundos
    if ($tiempoTranscurrido > $tiempoMaximo) {
        header("Location: login.php");
        exit;
    }
}

?>
