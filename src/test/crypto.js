import { randomBytes } from 'crypto';
// generacion de codigo de verificacion
// export const codigo = 'codigo'

// Función para generar un código aleatorio
export const generateRandomCode = () => {
    return randomBytes(3).toString('hex').toUpperCase();
}