import usuarioService from "../services/usuario.service.js";
// import registroController from "../controllers/registro.controller.js";
import registroService from "../services/registro.service.js";

import { } from "module";
let nusuario
export default {
    listar: async (req, res) => {
        try {
            const usuarios = await usuarioService.listarUsuario()
            return res.status(200).json({ data: usuarios })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
    agregar: async (req, res) => {
        try {
            const nuevo = req.body
            // console.log(nuevo)
            const usuario = await usuarioService.agregarUsuario(nuevo)
            // respuesta al cliente
            return res
                .status(201)
                .json({ message: "usuario agregado exitosamente: ", data: usuario })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
}