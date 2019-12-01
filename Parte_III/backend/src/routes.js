const express = require('express');

const CartaoController = require('./controllers/CartaoController');
const FuncionarioController = require('./controllers/FuncionarioController');
const FornecedorController = require('./controllers/FornecedorController');
const ProdutoController = require('./controllers/ProdutoController');
const FechamentoController = require('./controllers/FechamentoController');

const routes = express.Router();

routes.get('/cartoes', CartaoController.index);
routes.post('/cartoes', CartaoController.store);
routes.delete('/cartoes/:numero', CartaoController.delete);

routes.get('/funcionarios', FuncionarioController.index);
routes.post('/funcionarios', FuncionarioController.store);
routes.delete('/funcionarios/:id', FuncionarioController.delete);

routes.get('/fornecedores', FornecedorController.index);
routes.post('/fornecedores', FornecedorController.store);
routes.delete('/fornecedores/:cnpj', FornecedorController.delete);

routes.get('/produtos', ProdutoController.index);
routes.post('/produtos', ProdutoController.store);
routes.delete('/produtos/:id', ProdutoController.delete);

routes.get('/fechamentos', FechamentoController.index);
routes.post('/fechamentos', FechamentoController.store);
routes.delete('/fechamentos/:id', FechamentoController.delete);

module.exports = routes;