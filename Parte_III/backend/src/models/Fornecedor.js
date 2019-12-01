const { Model, DataTypes } = require('sequelize');

class Fornecedor extends Model {
    static init(sequelize) { //sequelize
        super.init({
            cnpj: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            nome_fantasia: DataTypes.STRING,
            nome_produto: DataTypes.STRING,
            endereco: DataTypes.STRING
        },
            {
                sequelize,
                tableName: 'fornecedores',
            }
        )
    }
}

module.exports = Fornecedor;