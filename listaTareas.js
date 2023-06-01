class ListaTareas {
    constructor() {
        this.tareas = [];
    }

    agregarTarea(nombre) {
        this.tareas.push(nombre);
    }

    eliminarTarea(indice) {
        if (indice >= 0 && indice < this.tareas.length) {
            this.tareas.splice(indice, 1);
        } else {
            console.log('Índice de tarea inválido.');
        }
    }

    obtenerTarea(indice) {
        if (indice >= 0 && indice < this.tareas.length) {
            return this.tareas[indice];
        } else {
            console.log('Índice de tarea inválido.');
            return null;
        }
    }

    mostrarTareas() {
        if (this.tareas.length === 0) {
            console.log('No hay tareas.');
        } else {
            this.tareas.forEach((tarea, indice) => {
                console.log(`${indice}. ${tarea}`);
            });
        }
    }
}

module.exports = ListaTareas;