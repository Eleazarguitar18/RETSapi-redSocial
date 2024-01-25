import { generateRandomCode } from '../test/crypto.js'
import { enviarCorreo } from "../test/envioCorreo.js";
// const codigo = generateRandomCode()
export default {
    enviarCodigo: async (datos) => {
        const codigo = generateRandomCode();

        try {
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
    }
}