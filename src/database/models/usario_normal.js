import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.config.js";
import Usuario from "./usuario.js";
// creando el modelo para crear la tabla
export const UsuarioNormal = sequelize.define('Usuario', {
    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fecha_registro: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
})
