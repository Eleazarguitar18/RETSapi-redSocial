import registroService from "../services/registro.service.js";
import usuarioService from "../services/usuario.service.js";
let respuestaCorreo;
let datos;
export default {
    enviarcorreo: async (req, res) => {
        try {
            const nuevo = req.body
            datos = nuevo
            respuestaCorreo = await registroService.enviarCodigo(nuevo)
            if (!respuestaCorreo.envio) {
                return res.status(404).json({ data: respuestaCorreo })
            }
            return res.status(200).json({ data: respuestaCorreo })
        } catch (error) {
            return res.status(500).json({ mensaje: 'Error al enviar el correo', message: error.message })
        }
    },
    verificarCodigo: async (req, res) => {
        try {

            const codigoRecibido = req.params.codigo
            const codigoEnviado = respuestaCorreo.codigoVerificacion
            console.log('codigo recibido: ', codigoRecibido, '    ', 'codigo recibido: ', codigoEnviado);
            if (codigoRecibido.toString() === codigoEnviado.toString()) {
                const usuario = await usuarioService.agregarUsuario(datos)
                // respuesta al cliente
                return res
                    .status(201)
                    .json({ message: "usuario agregado exitosamente: ", data: usuario })
            }
            return res.status(400).json({ message: 'codigo incorrecto' })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
}