import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.config.js";
import { Usuario } from "./usuario.js";
// creando el modelo para crear la tabla
export const UsuarioNormal = sequelize.define('UsuarioNormal', {
    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'idUsuario',
        },
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

UsuarioNormal.belongsTo(Usuario, {
    foreignKey: 'idUsuario',
    constraints: false
})
// Usuario.hasOne(UsuarioNormal, {
//     foreignKey: 'idUsuario',
//     constraints: false,
// })