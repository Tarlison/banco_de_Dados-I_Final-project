const { Model, DataTypes } = require('sequelize');

class Cartao extends Model {
    static init(sequelize) { //sequelize
        super.init({
            numero: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            proprietario: DataTypes.STRING,
            data_de_validade: DataTypes.DATE,
            situacao: DataTypes.STRING
        },
            {
                sequelize,
                tableName: 'cartoes',
            }
        )
    }
}

module.exports = Cartao;