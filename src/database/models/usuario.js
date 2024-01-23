import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.config.js";

// creando el modelo para crear la tabla
export const Usuario = sequelize.define('Usuario', {
    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    ci: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apPaterno: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apMaterno: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_nac: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
    },
    contrasenia: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})
// Usuario.hasOne(UsuarioNormal, {
//     foreignKey: 'idUsuario',
//     constraints: false,
// })