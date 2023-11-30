// app.js
const express = require('express');
const app = express();
const port = 3000;
// Conexión a la base de datos
const db = require('./db/connection');

// Ruta principal
app.get('/saluda', (req, res) => {
    res.send('¡Hola, mundo!');
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/Presentacion_Backen _IA-4.jpeg');
})

// Rutas
const routes = require('./routes/index');
app.use('/api', routes);

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
