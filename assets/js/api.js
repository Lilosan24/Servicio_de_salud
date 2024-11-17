function consumoApi() {
    // Recoger los datos del formulario
    var edad = document.getElementById('edad').value;
    var glucosa = document.getElementById('glucosa').value;
    var imc = document.getElementById('imc').value;

    // Eliminar clases de error previas
    document.getElementById('edad').classList.remove('error');
    document.getElementById('glucosa').classList.remove('error');
    document.getElementById('imc').classList.remove('error');
    
    document.getElementById('edad-error').innerText = '';
    document.getElementById('glucosa-error').innerText = '';
    document.getElementById('imc-error').innerText = '';

    // Definir los rangos para los campos numéricos
    var errores = false;

    // Validación de edad
    if (edad < 0 || edad > 130) {
        errores = true;
        document.getElementById('edad').classList.add('error');
        document.getElementById('edad-error').innerText = 'La edad debe estar entre 0 y 130.';
    }

    // Validación de glucosa
    if (glucosa < 0 || glucosa > 500) {
        errores = true;
        document.getElementById('glucosa').classList.add('error');
        document.getElementById('glucosa-error').innerText = 'El nivel de glucosa debe estar entre 0 y 500.';
    }

    // Validación de índice de masa corporal (IMC)
    if (imc < 0 || imc > 100) {
        errores = true;
        document.getElementById('imc').classList.add('error');
        document.getElementById('imc-error').innerText = 'El IMC debe estar entre 0 y 100.';
    }

    // Si hay errores, mostrar una alerta y evitar el envío
    if (errores) {
        return false;
    }

    // Si no hay errores, permitir el envío del formulario
    return true;
}
