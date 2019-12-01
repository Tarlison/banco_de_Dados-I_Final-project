const Fechamento = require('../models/Fechamento.js');

module.exports = {
    async index(req, res) {
        const fechamentos = await Fechamento.findAll();

        return res.json(fechamentos);
    },

    async store(req, res) {

        const { dinheiro } = req.body;

        const fechamento = await Fechamento.create({
            dinheiro: dinheiro
        });

        return res.json(fechamento);
    },

    async delete(req, res) {
        const { id } = req.params;

        const fechamento = await Fechamento.findByPk(id);

        if (!fechamento) {
            return res.status(400).json({ error: 'Fechamento not found ' });
        }

        await Fechamento.destroy({
            where: { id }
        })

        return res.json();

    }

}