import { Usuario } from "../database/models/usuario.js";
import { encriptar } from "../test/bcrypt_test.js";
export default {
    agregarUsuario: async (nuevoUsario) => {
        try {
            const contra = await encriptar(nuevoUsario.contrasenia)
            // console.log('Contraseña hasheada:', contra);
            nuevoUsario.contrasenia = contra
            return await Usuario.create(nuevoUsario)
        } catch (error) {
            console.error('Error al hashear la contraseña:', error);
            throw new Error('Error al agregar el usuario');
            // return { message: 'Error al agregar el usuario' }
        }
    },
    listarUsuario: async () => {
        return await Usuario.findAll()
    }
}