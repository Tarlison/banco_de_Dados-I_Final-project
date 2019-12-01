const Cliente = require('../models/Cliente');

module.exports = {
    async index(req, res) {
        const clientes = await Cliente.findAll();

        return res.json(clientes);
    },

    async store(req, res) {

        const { cpf, nome, endereco, cartao } = req.body;

        const cliente = await Cliente.create({
            cpf: cpf,
            nome: nome,
            endereco: endereco,
            cartao: cartao
        });

        return res.json(cliente);
    },

    async delete(req, res) {
        const { cpf } = req.params;

        const cliente = await Cliente.findByPk(cpf);

        if (!cliente) {
            return res.status(400).json({ error: 'Clientes not found ' });
        }

        await Cliente.destroy({
            where: { cpf }
        })

        return res.json();

    }

}