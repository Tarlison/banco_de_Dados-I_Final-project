const { Model, DataTypes } = require('sequelize');

class Estoque extends Model {
    static init(sequelize) { //sequelize
        super.init({
            nome_produto: DataTypes.STRING,
            quantidade: DataTypes.INTEGER
        },
            {
                sequelize,
                tableName: 'estoque',
            }
        )
    }
}

module.exports = Estoque;