import { generateRandomCode } from '../test/crypto.js'
import { enviarCorreo } from "../test/envioCorreo.js";
import usuarioService from "../services/usuario.service.js";
// const codigo = generateRandomCode()
export default {
    enviarCodigo: async (datos) => {
        const codigo = generateRandomCode();

        try {
            if (await usuarioService.buscarUsuarioRegistro(datos.correo)) {
                return { envio: false, message: 'Correo ya registrado' }
            }
            await enviarCorreo(datos.correo, codigo)
            return { envio: true, codigoVerificacion: codigo }
        } catch (error) {
            return { envio: false, codigoVerificacion: codigo }
        }
    },
    vericarCodigo: ({ codigoRespuesta, codigoEnviado }) => {
        if (codigoRespuesta === codigoEnviado) {
            return true
        }
        return false
    },
    // validarRegistro:async (datos)=>{

    // }
}