import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.config.js";

// creando el modelo para crear la tabla
export const Usuario = sequelize.define('Usuario', {
    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombres: {
        type: DataTypes.STRING,
    },
    correo: {
        type: DataTypes.STRING
    }

})
