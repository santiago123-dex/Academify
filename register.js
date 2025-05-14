const boton = document.getElementById('toggledark');
const body = document.body;
const titulo = document.getElementById('TituloMode')

boton.addEventListener('click', function(event) {
    body.classList.toggle('dark-mode');
    titulo.style.color = '#111'
    if (event.target.textContent === 'Modo Azul') {
        event.target.textContent = 'Modo Claro';
    } else {
        event.target.textContent = 'Modo Azul';
        titulo.style.color = '#48f'
    }
});
