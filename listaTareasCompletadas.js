class ListaTareasCompletadas {
    constructor() {
        this.tareasCompletadas = [];
    }

    agregarTarea(tarea) {
        this.tareasCompletadas.push(tarea);
    }
}

module.exports = ListaTareasCompletadas;