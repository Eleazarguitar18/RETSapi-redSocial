import bcrypt from "bcrypt";
import { Usuario } from "../database/models/usuario.js";
import { enviarCorreoLogin } from "../test/envioCorreo.js";
import jwt from "jsonwebtoken";

const secret = process.env.SECRET;
const generarToken = (user) => {
  const token = jwt.sign({ id: user.idUsuario, email: user.correo }, secret, { expiresIn: '1h', })
  return token;
}
export default {
  verificaCredenciales: async (credenciales) => {
    console.log("entrando a verificar las credenciales: ", credenciales)
    const ans = {
      code: 400,
      message: "Credenciales incorrectas",
    };
    // console.log(ans)
    //verificamos que exista un usuario con este correo
    const filas = await Usuario.findAll({
      where: {
        correo: credenciales.correo,
      },
    });
    // console.log(filas)
    if (filas) {
      const usuario = filas[0].dataValues;
      console.log("usuario encontrado", usuario)

      // const id_usuario = usuario.id_usuario;
      // credenciales.id_usuario = id_usuario;

      //validar correos iguales

      const iguales = await bcrypt.compare(credenciales.contrasenia, usuario.contrasenia);
      if (iguales) {
        await enviarCorreoLogin(usuario.correo)
        // buscamos si es administrador o no para ponerle su rol
        // const uadmin = await administradorService.buscaPorIdUsuario(id_usuario);
        // if (uadmin) {
        //   credenciales.rol = uadmin.rol;
        //   credenciales.id_administrador = uadmin.id_administrador;
        // }
        // else{
        // ? aqui podrias poner la validacion para bloquear al usuario
        // }


        // if (credenciales.rol != "administrador" && credenciales.rol != "colaborador") {
        //   credenciales.id_usuario_normal = id_usuario;
        //   // verificando si esta habilitado para iniciar sesion
        //   const cuenta_usario = await usuario_normalService.obtenerUsuario_normal(id_usuario)
        //   console.log(cuenta_usario.estado)
        //   if (cuenta_usario.estado == 'desactivo') {
        //     console.log('La cuenta está desactivada.');
        //     ans.code = 200
        //     ans.message = "usuario inabilitado"
        //     return ans;
        //   }
        // }

        ans.code = 200;
        ans.message = "Usuario encontrado";
        ans.data = usuario;
        ans.token = generarToken(usuario)
      } else {
        console.log("contrasenia incorrecta")
        ans.message = "contrasenia incorrecta";
      }

    }
    console.log("Usuario econtrado y autenticado")
    return ans;
  },
};

