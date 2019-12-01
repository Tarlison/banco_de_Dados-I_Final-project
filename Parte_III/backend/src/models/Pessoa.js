const { Model, DataTypes } = require('sequelize');

class Pessoa extends Model {
    static init(sequelize) { //sequelize
        super.init({
            cpf: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            nome: DataTypes.STRING,
            endereco: DataTypes.STRING
        },
            {
                sequelize,
            }
        )
    }
}

module.exports = Pessoa;