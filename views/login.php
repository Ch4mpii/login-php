<!DOCTYPE html>
<?php include 'seguridad.php' ?>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario de Inicio de Sesión</title>
    <link rel="stylesheet" href="../assets/css/estilos.css">
    <link rel="icon" href="../public/fav.ico" type="image/x-icon">
</head>

<body>
<div class="login-container">
    <form id="login-form" action="validar-login.php" method="POST">
        <h2>Iniciar Sesión</h2>
        <div class="input-group">
            <label for="usuario">Usuario</label>
            <input type="text" id="usuario" name="usuario" required>
        </div>
        <div class="input-group">
            <label for="contrasena">Contraseña</label>
            <input type="password" id="contrasena" name="contrasena" required>
        </div>
        <button type="submit" id="login-btn">Ingresar</button>
    </form>
</div>
</body>
</html>
