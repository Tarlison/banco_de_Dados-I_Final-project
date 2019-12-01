const Sequelize = require('sequelize'); //chamando a classe sequelize;
const dbConfig = require('../config/database'); // pegando a configuração do database;
const Cartao = require('../models/Cartao');
const Funcionario = require('../models/Funcionario');
const Fornecedor = require('../models/Fornecedor');
const Produto = require('../models/Produto');
const Fechamento = require('../models/Fechamento');

const connection = new Sequelize(dbConfig);

Cartao.init(connection);
Funcionario.init(connection);
Fornecedor.init(connection);
Produto.init(connection);
Fechamento.init(connection);


module.exports = connection;
