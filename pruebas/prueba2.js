const caja = document.getElementById('miCaja')

if (caja) {

    caja.addEventListener('mouseenter', function () {
        //Este code se ejecuta solo cuando el mouse Entra
        console.log('ACCION el mouse acaba de entrar a la caja ')
        caja.textContent = 'Estas dentro de la caja' 
        caja.classList.add('hover')
        console.log('CLASE despues de añadir el hover', caja.classList)
    })


    caja.addEventListener('mouseleave', function () {
        //Este code se ejecuta solo cuando el Mouse Sale
        console.log('ACCION acabas de salir de la caja')
        caja.textContent = 'Pasa el mouse sobre mi'
        caja.classList.remove('hover')
    })
}