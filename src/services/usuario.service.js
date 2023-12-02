import { Usuario } from "../database/models/usuario.js";

export default {
    agregarUsuario: async (nuevoUsario) => {
        return await Usuario.create(nuevoUsario)
    },
    listarUsuario: async () => {
        return await Usuario.findAll()
    }
}