const ListaTareas = require('./listaTareas');
const ListaTareasCompletadas = require('./listaTareasCompletadas');

class GestorTareas {
    constructor() {
        this.tareas = new ListaTareas();
        this.tareasCompletadas = new ListaTareasCompletadas();
    }

    agregarTarea(nombre) {
        this.tareas.agregarTarea(nombre);
    }

    completarTarea(indice) {
        const tarea = this.tareas.obtenerTarea(indice);
        if (tarea) {
            this.tareas.eliminarTarea(indice);
            this.tareasCompletadas.agregarTarea(tarea);
        } else {
            console.log('Índice de tarea inválido.');
        }
    }

    eliminarTarea(indice) {
        this.tareas.eliminarTarea(indice);
    }

    mostrarTareas() {
        this.tareas.mostrarTareas();
    }
}

module.exports = GestorTareas;