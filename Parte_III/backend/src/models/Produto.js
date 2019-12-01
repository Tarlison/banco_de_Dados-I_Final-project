const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
    static init(sequelize) { //sequelize
        super.init({
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING,
            preco: DataTypes.FLOAT,
            quantidade: DataTypes.INTEGER,
            fornecedor: DataTypes.STRING
        },
            {
                sequelize,
            }
        )
    }
}

module.exports = Produto;