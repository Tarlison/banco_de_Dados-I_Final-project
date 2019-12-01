const { Model, DataTypes } = require('sequelize');

class Funcionario extends Model {
    static init(sequelize) { //sequelize
        super.init({
            nome: DataTypes.STRING,
            cpf: DataTypes.STRING,
            salario: DataTypes.FLOAT,
            cargo: DataTypes.STRING
        },
            {
                sequelize,
            }
        )
    }
}

module.exports = Funcionario;