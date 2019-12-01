const { Model, DataTypes } = require('sequelize');

class Cargo extends Model {
    static init(sequelize) { //sequelize
        super.init({
            nome: DataTypes.STRING,
            salario: DataTypes.FLOAT
        },
            {
                sequelize,
            }
        )
    }
}

module.exports = Cargo;