const axios = require('axios');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    const loginButton = document.getElementById('login-btn');
    if (loginButton) {
        console.log('Login button found');

        loginButton.addEventListener('click', function() {
            console.log('Login button clicked');

            const usuario = document.getElementById('usuario').value;
            const contrasena = document.getElementById('contrasena').value;

            console.log('Username:', usuario);
            console.log('Password:', '[PROTECTED]'); // Avoid logging passwords in production

            axios.post('http://localhost:3000/login', {
                username: usuario,
                password: contrasena
            })
                .then(function(response) {
                    console.log('Response received:', response);
                    if (response.data.token) {
                        alert('Login exitoso!');
                        localStorage.setItem('token', response.data.token);
                        window.location.href = 'app.html';
                    } else {
                        alert('Inicio de sesión exitoso pero no se encontró token.');
                    }
                })
                .catch(function(error) {
                    console.log('Error occurred:', error);
                    if (error.response) {
                        alert(`Error ${error.response.status}: ${error.response.data}`);
                    } else if (error.request) {
                        alert('No se recibió respuesta del servidor.');
                    } else {
                        alert('Error al realizar la solicitud: ' + error.message);
                    }
                });
        });
    } else {
        console.log('Login button not found');
    }
});
