const mostrarOpcionesPago = () => {
    const pagoOp = document.getElementById('pagoOp').value;
    const opcionesTarjeta = document.getElementById('opcionesTarjeta');
    const opcionesPayPal = document.getElementById('opcionesPayPal');
    const opcionesTransferencia = document.getElementById('opcionesTransferencia');

    if (pagoOp === 'Tarjeta de Crédito') {
        opcionesTarjeta.style.display = 'block';
        opcionesPayPal.style.display = 'none';
        opcionesTransferencia.style.display = 'none';
    } else if (pagoOp === 'Paypal') {
        opcionesTarjeta.style.display = 'none';
        opcionesPayPal.style.display = 'block';
        opcionesTransferencia.style.display = 'none';
    } else if (pagoOp === 'Transferencia') {
        opcionesTarjeta.style.display = 'none';
        opcionesPayPal.style.display = 'none';
        opcionesTransferencia.style.display = 'block';
    } else {
        opcionesTarjeta.style.display = 'none';
        opcionesPayPal.style.display = 'none';
        opcionesTransferencia.style.display = 'none';
    }
};

const enviarFormulario = () => {
    const nombre = document.getElementById('nombreJ').value.trim();
    const apellido = document.getElementById('apellidoJ').value.trim();
    const email = document.getElementById('emailJ').value.trim();
    const telefono = document.getElementById('telef').value.trim();
    const metodoPago = document.getElementById('pagoOp').value;
    const numeroTarjeta = document.getElementById('numTar').value.trim();
    const fechaVencimiento = document.getElementById('fechaV').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    const correoPayPal = document.getElementById('correoPay').value.trim();
    const nombreBanco = document.getElementById('nombreBan').value.trim();
    const numeroCuenta = document.getElementById('numeroCu').value.trim();
    const codigoSwift = document.getElementById('codigoSw').value.trim();

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    // Validaciones generales
    if (!nombre.match(/^[a-zA-Z]+$/) ||
        !apellido.match(/^[a-zA-Z]+$/) ||
        !email.match(/^\S+@\S+\.\S+$/) ||
        !telefono.match(/^\d{10}$/) ||
        metodoPago === 'Seleccionar') {
        alert('Por favor, complete todos los campos obligatorios correctamente.');
        return;
    }

    resultado.innerHTML += '¡Compra Registrada!' + '<br> Nombre del cliente: ' + nombre + ' ' + apellido +
        '<br>Correo electrónico: ' + email +
        '<br>Teléfono: ' + telefono +
        '<br>Método de Pago: ' + metodoPago;

    if (metodoPago === 'Tarjeta') {
        // Validaciones específicas para Tarjeta
        if (!numeroTarjeta.match(/^\d+$/) || numeroTarjeta.length !== 16 ||
            !fechaVencimiento.match(/^(0[1-9]|1[0-2])\/\d{2}$/) ||
            !cvv.match(/^\d{3,4}$/)) {
            alert('Por favor, complete todos los campos de la tarjeta de crédito correctamente.');
            return;
        }

        resultado.innerHTML += '<br>Número de Tarjeta: ' + numeroTarjeta +
            '<br>Fecha de Vencimiento: ' + fechaVencimiento +
            '<br>CVV: ' + cvv;

    } else if (metodoPago === 'Paypal') {
        // Validaciones específicas para PayPal
        if (!correoPayPal.match(/^\S+@\S+\.\S+$/)) {
            alert('Por favor, ingrese un correo electrónico de PayPal válido.');
            return;
        }

        resultado.innerHTML += '<br>Correo Electrónico de PayPal: ' + correoPayPal;

    } else if (metodoPago === 'Transferencia') {
        // Validaciones específicas para Transferencia
        if (!numeroCuenta.match(/^\d{10}$/) ||
            !codigoSwift.match(/^\d{11}$/)) {
            alert('Por favor, complete todos los campos de la transferencia correctamente.');
            return;
        }

        resultado.innerHTML += '<br>Nombre del Banco: ' + nombreBanco +
            '<br>Número de Cuenta: ' + numeroCuenta +
            '<br>Código SWIFT/BIC: ' + codigoSwift;
    }
};
