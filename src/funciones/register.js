const boton = document.getElementById('toggledark');
const body = document.body;
const titulo = document.getElementById('TituloMode')
const imagen = document.querySelectorAll('.icon')

boton.addEventListener('click', function(event) {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        titulo.style.color = '#111'
        event.target.textContent = "Modo Claro"
    } else {
        titulo.style.color = '#48f'
        event.target.textContent = 'Modo Oscuro';
    }
});
