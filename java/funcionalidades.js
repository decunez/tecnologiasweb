// Estructura if
document.getElementById('btnComparar').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado;
    if (num1 > num2) {
        resultado = `El mayor es ${num1}`;
    } else if (num1 < num2) {
        resultado = `El mayor es ${num2}`;
    } else {
        resultado = 'Ambos números son iguales';
    }
    document.getElementById('resultadoIf').innerText = resultado;
});
// Limpiar campos de numeros
document.getElementById('btnLimpiar').addEventListener('click', () => {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('resultadoIf').innerText = '';
});

// Estructura switch
document.getElementById('btnMes').addEventListener('click', () => {
    const mes = parseInt(document.getElementById('mes').value);
    let mensaje;
    switch (mes) {
        case 1:
            mensaje = 'El mes es Enero';
            break;
        case 2:
            mensaje = 'El mes es Febrero';
            break;
        case 3:
            mensaje = 'El mes es Marzo';
            break;
        case 4:
            mensaje = 'El mes es Abril';
            break;
        case 5:
            mensaje = 'El mes es Mayo';
            break;
        case 6:
            mensaje = 'El mes es Junio';
            break;
        case 7:
            mensaje = 'El mes es Julio';
            break;
        case 8:
            mensaje = 'El mes es Agosto';
            break;
        case 9:
            mensaje = 'El mes es Septiembre';
            break;
        case 10:
            mensaje = 'El mes es Octubre';
            break;
        case 11:
            mensaje = 'El mes es Noviembre';
            break;
        case 12:
            mensaje = 'El mes es Diciembre';
            break;
        default:
            mensaje = 'Número inválido';
    }
    alert(mensaje);
    document.getElementById('mes').value = '';
});

// Gestión de arrays
let nombres = [];
document.getElementById('btnAgregar').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    if (nombre) {
        nombres.push(nombre);
        const lista = document.getElementById('listaNombres');
        lista.innerHTML = ''; // Limpiar contenido previo
        nombres.forEach(nombre => {
            const li = document.createElement('li'); // Crear un elemento de lista
            li.textContent = nombre; // Asignar el nombre al contenido del elemento
            lista.appendChild(li); // Agregar el elemento a la lista
        });
        // Limpiar el campo de entrada
        document.getElementById('nombre').value = '';
    }
});