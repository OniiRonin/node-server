const express = require('express');
const app = express();

const tareas = [
    { id: 1, descripcion: 'Hacer la compra', estado: 'pendiente' },
    { id: 2, descripcion: 'Limpiar la casa', estado: 'pendiente' },
    { id: 3, descripcion: 'Estudiar para el examen', estado: 'completado' }
];

app.get('/tareas', (req, res) => {
    res.json(tareas);
});

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});
