import bcrypt from 'bcrypt';
import { CRYPTO } from "../config/constans.js";
// Puedes ajustar este valor según tus necesidades

// Para cifrar una contraseña
export const encriptar = async (password) => {
    try {
        // Genera un salt (valor aleatorio) para el hash
        const salto = parseInt(CRYPTO.SAL_ROUND)
        const salt = await bcrypt.genSalt(salto);
        // Genera el hash utilizando la contraseña y el salt
        const hashedPassword = await bcrypt.hash(password, salt);
        // console.log(hashedPassword)
        return hashedPassword;
    } catch (error) {
        throw error;
    }
};


export const comparePassword = async (password, hashedPassword) => {
    try {
        // Compara la contraseña ingresada con el hash almacenado
        const match = await bcrypt.compare(password, hashedPassword);

        return match;
    } catch (error) {
        throw error;
    }
};
// export const encriptar = bcrypt.hash(plainTextPassword, saltRounds, (err, hash) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('Contraseña cifrada:', hash);

//         // Ahora puedes almacenar el hash en tu base de datos, por ejemplo.
//     }
// });

// Para verificar una contraseña
// const hashedPasswordFromDatabase = 'elHashAlmacenadoEnTuBD';
// const userEnteredPassword = 'contraseñaIngresadaPorUsuario';

// export const comparar = bcrypt.compare(userEnteredPassword, hashedPasswordFromDatabase, (err, result) => {
//     if (err) {
//         console.error(err);
//     } else {
//         if (result) {
//             console.log('Contraseña válida');
//         } else {
//             console.log('Contraseña incorrecta');
//         }
//     }
// });

// Ejemplo de uso
// encriptar('miContrasena123')
//     .then((hashedPassword) => {
//         // Haz algo con el hash resultante
//         console.log('Contraseña hasheada:', hashedPassword);
//     })
//     .catch((error) => {
//         console.error('Error al hashear la contraseña:', error);
//     });
