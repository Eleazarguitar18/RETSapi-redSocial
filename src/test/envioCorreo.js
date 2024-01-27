import nodemailer from 'nodemailer';
import { EMAIL } from '../config/constans.js';
// import { generateRandomCode } from './crypto.js'
import { readFile } from 'fs/promises';
// import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// const codigo = generateRandomCode()
// Configura el transporte (puedes usar diferentes proveedores como Gmail, SMTP, etc.)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL.EMAIL_SERVICES,
        pass: EMAIL.PASSEMAIL,
    },
});

// Función para enviar el correo electrónico
export const enviarCorreo = async (correo, codigo) => {
    try {
        const info = await transporter.sendMail({
            from: EMAIL.PASSEMAIL,
            to: correo,
            subject: 'Codigo de verificacion',
            html: `<h1>Codigo de verificacion de registro</h1>
            <p>Escribe el siguiente codigo en la ventana de registro para confirmar tu registro en la plataforma</p>
            <strong>CODIGO: ${codigo}</strong>`,
        });

        console.log('Correo electrónico enviado:', info.response);
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
    }
};
// export const enviarCorreoLogin = async (correo) => {
//     try {
//         // const rutaAlArchivoHTML = '../test/alertaLogin.html';
//         const directorioActual = dirname(new URL(import.meta.url).pathname);
//         // const rutaAlArchivoHTML = join(directorioActual, 'src', 'test', 'alertaLogin.html');
//         const rutaAlArchivoHTML = join(directorioActual, 'src', 'test', 'alertaLogin.html');
//         // const rutaAlArchivoHTML = join(__dirname, 'src', 'test', 'alertaLogin.html');
//         const contenidoHTML = await readFile(rutaAlArchivoHTML, 'utf8');
//         const info = await transporter.sendMail({
//             from: EMAIL.PASSEMAIL,
//             to: correo,
//             subject: 'Alerta de seguridad',
//             html: contenidoHTML,
//         });

//         console.log('Correo electrónico enviado:', info.response);
//     } catch (error) {
//         console.error('Error al enviar el correo electrónico:', error);
//     }
// };

export const enviarCorreoLogin = async (correo) => {
    try {
        // Obtiene la ruta al directorio del módulo actual
        const directorioActual = dirname(new URL(import.meta.url).pathname);

        // Usa la función join de path para construir la ruta al archivo HTML
        const rutaAlArchivoHTML = __dirname + '/alertaLogin.html';

        // Lee el contenido del archivo HTML de manera asíncrona
        const contenidoHTML = await readFile(rutaAlArchivoHTML, 'utf8');

        // Envía el correo con el contenido del archivo HTML en el cuerpo
        const info = await transporter.sendMail({
            from: EMAIL.PASSEMAIL,
            to: correo,
            subject: 'Alerta de seguridad',
            html: contenidoHTML,
        });

        console.log('Correo electrónico enviado:', info.response);
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
    }
};
// Llama a la función para enviar el correo
// enviarCorreo('mludenoc@fcpn.edu.bo', codigo);
