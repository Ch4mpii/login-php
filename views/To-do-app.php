<!DOCTYPE html>
<?php include 'seguridad.php' ?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="../assets/css/Todo-app.css">
    <link rel="icon" href="../public/fav.ico" type="image/x-icon">
    <title>TO-DO App</title>
    <script src="../assets/js/Todo-app.js"></script>
</head>
<body class="nes-balloon from-left nes-pointer">

<h1>TO-DO App</h1>

<div>
    <input type="text" id="taskInput" placeholder="Enter a new task">
    <button id="addTaskBtn" class="nes-btn is-success">Add Task</button>
</div>

<ul id="taskList"></ul>

<script src="../assets/js/Todo-app.js"></script>

</body>
</html>
