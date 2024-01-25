import { Resend } from 'resend';
import { EMAIL } from '../config/constans.js';
import { generateRandomCode } from './crypto.js'

const resend = new Resend(EMAIL.API_KEY);
// console.log(EMAIL.API_KEY);
const codigo = generateRandomCode()
// console.log(codigo);

export const envioCorreo = async (correo, codigo) => {
    const { data, error } = await resend.emails.send({
        from: 'EleazarDev <proyectoprueba@resend.dev>',
        to: [correo],
        subject: 'Codigo de verificacion',
        html: `<h1>Codigo de verificacion de registro</h1>
        <p>Escribe el siguiente codigo en la ventana de registro para confirmar tu registro en la plataforma</p>
        <strong>Aqui viene el codigo de verificacion${codigo}</strong>`,
    });
    if (error) {
        return console.error({ error });
    }
    console.log({ data });
}
envioCorreo('ecruzm2@fcpn.edu.bo', 'codigo')