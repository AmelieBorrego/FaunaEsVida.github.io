function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;

    const nombreRegex = /^[A-Za-z\s]+$/;
    const telefonoRegex = /^[0-9]{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombreRegex.test(nombre)) {
        alert('El nombre solo puede contener letras.');
        return false;
    }

    if (!nombreRegex.test(apellidos)) {
        alert('Los apellidos solo pueden contener letras.');
        return false;
    }

    if (!telefonoRegex.test(telefono)) {
        alert('El teléfono debe contener solo números y tener 9 dígitos.');
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return false;
    }

    return true;
}

function calcularPresupuesto() {
    const producto = parseInt(document.getElementById('producto').value);
    const plazo = parseInt(document.getElementById('plazo').value);
    const extras = document.querySelectorAll('input[name="extra"]:checked');
    
    let precioFinal = producto;

    // Descuento en función del plazo de entrega
    if (plazo > 6) {
        precioFinal -= precioFinal * 0.1; // 10% de descuento por plazo mayor a 6 meses
    }

    // Sumar los extras seleccionados
    extras.forEach(extra => {
        precioFinal += parseInt(extra.value);
    });

    // Actualizar el presupuesto final en el HTML
    document.getElementById('presupuesto-final').innerText = `€${precioFinal.toFixed(2)}`;
}