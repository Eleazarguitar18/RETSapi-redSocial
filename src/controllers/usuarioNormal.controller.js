import usuarioNormalService from "../services/usuarioNormal.service.js";
// import registroService from "../services/registro.service.js";

export default {
    listar: async (req, res) => {
        try {
            const usuarios = await usuarioNormalService.listarUsuarioNormal()
            return res.status(200).json({ data: usuarios })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
    agregar: async (req, res) => {
        try {
            const nuevo = req.body
            console.log(nuevo)
            // await registroService.enviarCodigo(nuevo)
            const usuario = await usuarioNormalService.agregarUsuarioNormal(nuevo)
            // respuesta al cliente
            return res
                .status(201)
                .json({ message: "el usuario se agrego: ", data: usuario })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },

}