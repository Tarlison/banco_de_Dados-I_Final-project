const Cartao = require('../models/Cartao');

module.exports = {
    async index(req, res) {
        const cartoes = await Cartao.findAll();

        return res.json(cartoes);
    },

    async store(req, res) {

        const { numero, proprietario, data_de_validade, situacao } = req.body;

        const cartao = await Cartao.create({
            numero: numero,
            proprietario: proprietario,
            data_de_validade: data_de_validade,
            situacao: situacao
        });

        return res.json(cartao);
    },

    async delete(req, res) {
        const { numero } = req.params;

        const cartao = await Cartao.findByPk(numero);

        if (!cartao) {
            return res.status(400).json({ error: 'Card not found ' });
        }

        await Cartao.destroy({
            where: { numero }
        })

        return res.json();

    }

}