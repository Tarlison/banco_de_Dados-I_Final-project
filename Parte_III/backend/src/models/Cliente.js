const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
    static init(sequelize) { //sequelize
        super.init({
            cpf: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            nome: DataTypes.STRING,
            endereco: DataTypes.STRING,
            cartao: DataTypes.INTEGER
        },
            {
                sequelize,
            }
        )
    }
}

module.exports = Cliente;