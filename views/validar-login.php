<?php

// Comprobación de usuario y contraseña (esto debe ser más complejo en un entorno real)
$usuario = "usuario"; // Reemplaza con tu nombre de usuario
$contrasena = "contrasena"; // Reemplaza con tu contraseña

if ($_POST['usuario'] === $usuario && $_POST['contrasena'] === $contrasena) {
    session_start();
    $_SESSION['login'] = "SI";
    $_SESSION['acceso'] = time(); // Guarda el tiempo actual en la sesión
    header("Location: app.php");
} else {
    echo "Credenciales incorrectas";
    header("Location: login.php");
}
?>


