// Función para alternar el formulario de inicio de sesión
function toggleLogin() {
    var loginForm = document.getElementById('login-form');
    if (loginForm.style.display === 'block') {
        loginForm.style.display = 'none';
    } else {
        loginForm.style.display = 'block';
    }
}

// Agregar el evento click a los enlaces de navegación
document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
        // Eliminar la clase 'active' de todos los enlaces
        document.querySelectorAll('.nav-link').forEach(function(el) {
            el.classList.remove('active');
        });
        // Agregar la clase 'active' al enlace clicado
        this.classList.add('active');
    });
});
