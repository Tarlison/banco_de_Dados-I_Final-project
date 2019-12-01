const { Model, DataTypes } = require('sequelize');

class Fechamento extends Model {
    static init(sequelize) { //sequelize
        super.init({
            dinheiro: DataTypes.FLOAT
        },
            {
                sequelize,
            }
        )
    }
}

module.exports = Fechamento;