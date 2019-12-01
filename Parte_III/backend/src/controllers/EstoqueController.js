const Estoque = require('../models/Estoque.js');

module.exports = {
    async index(req, res) {
        const estoques = await Estoque.findAll();

        return res.json(estoques);
    },

    async store(req, res) {

        const { dinheiro } = req.body;

        const estoque = await Estoque.create({
            dinheiro: dinheiro
        });

        return res.json(estoque);
    },

    async delete(req, res) {
        const { id } = req.params;

        const estoque = await Estoque.findByPk(id);

        if (!estoque) {
            return res.status(400).json({ error: 'Estoque not found ' });
        }

        await Estoque.destroy({
            where: { id }
        })

        return res.json();

    }

}