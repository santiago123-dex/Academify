  const boton = document.getElementById('toggleDarkMode');
  const body = document.body

  boton.addEventListener('click', function(event) {
    body.classList.toggle('dark-mode')
    if (event.target.textContent === 'Cambiar a Modo Oscuro') {
      event.target.textContent = 'Cambiar a Modo Claro';
    } else {
      event.target.textContent = 'Cambiar a Modo Oscuro';
    }
  })




