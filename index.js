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

function procesarOpcionMenu(opcion) {
    switch (opcion) {
        case '1':
            agregarTarea();
            break;
        case '2':
            completarTarea();
            break;
        case '3':
            eliminarTarea();
            break;
        case '4':
            console.log('Saliendo del Gestor de Tareas...');
            rl.close();
            break;
        default:
            console.log('Opción inválida. Por favor, inténtalo nuevamente.');
            mostrarMenu();
            break;
    }
}

function agregarTarea() {
    rl.question('Ingresa el nombre de la tarea: ', (nombre) => {
        gestorTareas.agregarTarea(nombre);
        console.log('¡Tarea agregada exitosamente!');
        mostrarMenu();
        rl.question('Ingresa tu opción: ', (opcion) => {
            procesarOpcionMenu(opcion);
        });
    });
}

function completarTarea() {
    console.log('Tareas:');
    gestorTareas.mostrarTareas();
    rl.question('Ingresa el índice de la tarea a completar: ', (indice) => {
        gestorTareas.completarTarea(indice);
        console.log('¡Tarea completada exitosamente!');
        mostrarMenu();
        rl.question('Ingresa tu opción: ', (opcion) => {
            procesarOpcionMenu(opcion);
        });
    });
}

function eliminarTarea() {
    console.log('Tareas:');
    gestorTareas.mostrarTareas();
    rl.question('Ingresa el índice de la tarea a eliminar: ', (indice) => {
        gestorTareas.eliminarTarea(indice);
        console.log('¡Tarea eliminada exitosamente!');
        mostrarMenu();
        rl.question('Ingresa tu opción: ', (opcion) => {
            procesarOpcionMenu(opcion);
        });
    });
}

function iniciarAplicacion() {
    mostrarMenu();
    rl.question('Ingresa tu opción: ', (opcion) => {
        procesarOpcionMenu(opcion);
    });
}

iniciarAplicacion();