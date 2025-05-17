const inputs = document.querySelectorAll('#name, #email, #password, #birthdate')
const registrar = document.querySelector('.btnAccount')
const lista = document.getElementById('lista')

registrar.addEventListener('click', function(event){
    event.preventDefault() // evita que el formulario se recargue
    let datos = []
    inputs.forEach(input => {
        // cada valor limpio lo va a subir al array
        datos.push(input.value.trim())
    });

    // unir todos los valores en un string
    const datosTexto = datos.join('')
    // si hay datos los va a agregar en un li
    if(datosTexto !== ""){
        const li = document.createElement('li')
        li.textContent = "Nombre: " + datos[0]  + `\nEmail: ` + datos[1] + "\nContraseña: " + datos[2] + "\nFecha de nacimiento:" + datos[3]
        lista.append(li)
        //limpiar todos los inputs
        inputs.forEach(input => input.value = "")
    }
})
