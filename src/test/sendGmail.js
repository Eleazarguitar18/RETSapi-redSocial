// import dotenv from "dotenv";
import nodemailer from 'nodemailer';

// import { fileURLToPath } from 'url';
// import { dirname, resolve } from 'path';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// dotenv.config({ path: resolve(__dirname, '../..', '.env') });

// Resto de tu código aquí...

import { EMAIL } from '../config/constans.js';


const enviarMail = async () => {
    const config = {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: EMAIL.EMAIL_SERVICES,
            pass: EMAIL.PASSEMAIL
        }
    }
    const mensaje = {
        from: EMAIL.EMAIL_SERVICES,
        to: 'eleazarguitar18@gmail.com',
        subject: 'Probando nueva configuracion 5 FINAL',
        text: 'Contenido del correo que deberias ver donde ya se esta usando la verificacion con variables de entorno',
    }

    const transport = nodemailer.createTransport(config);
    const info = await transport.sendMail(mensaje)

    console.log(info);
}
enviarMail();