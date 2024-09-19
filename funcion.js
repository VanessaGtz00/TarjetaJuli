function mostrarFormulario() {
    // Oculta la primera sección y muestra el formulario
    document.getElementById('florecita').style.display = 'none';
    document.getElementById('formulario').style.display = 'block';
}

function mostrarTarjetaConDatos() {
    // Obtiene los datos ingresados en el formulario
    let nombre = document.getElementById('nombre').value;
    let puesto = document.getElementById('puesto').value;

    // Inserta los datos en la tarjeta
    document.getElementById('datosA').innerHTML = `
        <h2>Datos Personales</h2>
        <p> ${nombre}</p>
        <p> ${puesto}</p>
    `;

    // Oculta el formulario y muestra la tarjeta con los datos
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('tarjetaFinal').style.display = 'block';
}