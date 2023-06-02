const readline = require('readline');
const GestorTareas = require('./gestorTareas');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const gestorTareas = new GestorTareas();

function mostrarMenu() {
    console.log('\n=== Gestor de Tareas ===');
    console.log('1. Agregar Tarea');
    console.log('2. Completar Tarea');
    console.log('3. Eliminar Tarea');
    console.log('4. Salir');
    console.log('========================');
}

function agregarTarea() {
    return new Promise((resolve) => {
        rl.question('Ingresa el nombre de la tarea: ', (nombre) => {
            gestorTareas.agregarTarea(nombre);
            console.log('¡Tarea agregada exitosamente!');
            resolve();
        });
    });
}

function completarTarea() {
    return new Promise((resolve) => {
        console.log('Tareas:');
        gestorTareas.mostrarTareas();
        rl.question('Ingresa el índice de la tarea a completar: ', (indice) => {
            gestorTareas.completarTarea(indice);
            console.log('¡Tarea completada exitosamente!');
            resolve();
        });
    });
}

function eliminarTarea() {
    return new Promise((resolve) => {
        console.log('Tareas:');
        gestorTareas.mostrarTareas();
        rl.question('Ingresa el índice de la tarea a eliminar: ', (indice) => {
            gestorTareas.eliminarTarea(indice);
            console.log('¡Tarea eliminada exitosamente!');
            resolve();
        });
    });
}

async function iniciarAplicacion() {
    mostrarMenu();
    let opcion = await pregunta('Ingresa tu opción: ');
    while (opcion !== '4') {
        switch (opcion) {
            case '1':
                await agregarTarea();
                break;
            case '2':
                await completarTarea();
                break;
            case '3':
                await eliminarTarea();
                break;
            default:
                console.log('Opción inválida. Por favor, inténtalo nuevamente.');
                break;
        }
        mostrarMenu();
        opcion = await pregunta('Ingresa tu opción: ');
    }
    console.log('Saliendo del Gestor de Tareas...');
    rl.close();
}

function pregunta(pregunta) {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
        });
    });
}

iniciarAplicacion();
