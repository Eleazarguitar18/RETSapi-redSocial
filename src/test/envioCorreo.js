import nodemailer from 'nodemailer';
import { EMAIL } from '../config/constans.js';
import { generateRandomCode } from './crypto.js'
const codigo = generateRandomCode()
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

// Llama a la función para enviar el correo
// enviarCorreo('mludenoc@fcpn.edu.bo', codigo);
