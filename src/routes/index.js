// routes/index.js
const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// Ruta para obtener todos los usuarios
router.get('/usuarios', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM Usuario');
        res.json(rows);
    } catch (error) {
        console.error('Error al consultar la base de datos:', error);
        res.status(500).send('Error interno del servidor');
    }
});
// TODO: metodo para agregar datos , pendiente
router.post('/usuarios', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM Usuario');
        res.json(rows);
    } catch (error) {
        console.error('Error al consultar la base de datos:', error);
        res.status(500).send('Error interno del servidor');
    }
});
module.exports = router;
