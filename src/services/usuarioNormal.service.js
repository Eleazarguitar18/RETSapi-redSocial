import { Usuario } from "../database/models/usuario.js";
import { UsuarioNormal } from "../database/models/usuario_normal.js";
import UsuarioService from "./usuario.service.js";
export default {
    agregarUsuarioNormal: async (nuevoUsario) => {
        const nusuario = await UsuarioService.agregarUsuario(nuevoUsario)
        const new_usuarioNormal = {
            idUsuario: nusuario.idUsuario,
            fecha_registro: new Date().toString(),
            estado: true
        }
        return await UsuarioNormal.create(new_usuarioNormal)
    },
    listarUsuarioNormal: async () => {
        return await UsuarioNormal.findAll({
            include: [{ model: Usuario }]
        })
    }
}