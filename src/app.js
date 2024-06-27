// app.js
import express from 'express';
import cors from 'cors'; // Importa el paquete cors
import morgan from "morgan";
import { sequelize } from "./database/sequelize.config.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// importacion de modulos
import { SERVER } from "./config/constans.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const SERVER_HOST = SERVER.HOST;
const SERVER_PORT = SERVER.PORT;
// console.log(port);
const corsOptions = {
    origin: (origin, callback) => {
        callback(null, true);
    },
    credentials: true,
}
// midelwares
// agregando cors para solicitudes
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());

// Conexión a la base de datos
// import db from './db/connection';
import './database/models/usuario_normal.js';
// import './database/models/usario.js';
async function main() {
    try {
        // await sequelize.sync({ alter: true })
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(SERVER_PORT, () => {
            console.log(`Servidor escuchando en http://${SERVER_HOST}:${SERVER_PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

// Rutas
// import router from './routes/index.js';
// app.use('/api', router);
import usuarioRoute from "./routes/usuario.routes.js";
import usuarioNormalRoute from "./routes/usuarioNormal.routes.js";
import registroRoute from "./routes/registro.routes.js";
import loginRoute from "./routes/login.routes.js";
//* Habilitacion de rutas
app.use('/api', usuarioRoute)//ruta del usuario
app.use('/api', usuarioNormalRoute)//ruta del usuario_normal
app.use('/api', registroRoute)//ruta del usuario
app.use('/api', loginRoute)//ruta del usuario
// app.use('/api',)

// Ruta principal
app.get('/saluda', (req, res) => {
    res.send('¡Hola, mundo!');
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/Backend Eleazar.jpeg');
})

// Inicia el servidor y conecta a la base de datos
main()
// app.listen(SERVER_PORT, () => {
//     console.log(`Servidor escuchando en http://${SERVER_HOST}:${SERVER_PORT}`);
// });
