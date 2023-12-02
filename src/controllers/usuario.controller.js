import usuarioService from "../services/usuario.service.js";

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
            console.log(nuevo)
            const usuario = await usuarioService.agregarUsuario(nuevo)
            // respuesta al cliente
            return res
                .status(201)
                .json({ message: "el recurso se agregado: ", data: usuario })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },

}