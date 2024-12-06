// Variable para almacenar la ventana nueva y la tabla
let newWindow;
let tableBody;

// Función para manejar el registro de usuario
const registrarUsuario = () => {
    const id = document.getElementById('id').value;
    const cedula = document.getElementById('cedula').value;
    const nombres = document.getElementById('nombres').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const ciudad = document.getElementById('ciudad').value;

    // Verificar si la nueva ventana ya está abierta
    if (!newWindow || newWindow.closed) {
        // Crear nueva ventana
        newWindow = window.open("", "_blank", "width=600,height=400");
        newWindow.document.write(`
            <h3>Datos Registrados</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cédula de Identidad</th>
                        <th>Nombres y Apellidos</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Ciudad de Procedencia</th>
                    </tr>
                </thead>
                <tbody id="tablaUsuarios">
                </tbody>
            </table>
        `);
        tableBody = newWindow.document.getElementById('tablaUsuarios');
    }

    // Crear una nueva fila con los datos ingresados
    const nuevaFila = tableBody.insertRow();

    // Insertar celdas con los datos en la fila
    nuevaFila.insertCell(0).textContent = id;
    nuevaFila.insertCell(1).textContent = cedula;
    nuevaFila.insertCell(2).textContent = nombres;
    nuevaFila.insertCell(3).textContent = fechaNacimiento;
    nuevaFila.insertCell(4).textContent = ciudad;

    // Limpiar los campos del formulario
    document.getElementById('registroForm').reset();
};

// Asignar el evento al botón de registro
document.getElementById('registrarBtn').addEventListener('click', registrarUsuario);
