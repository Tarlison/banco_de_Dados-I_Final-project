const Categoria = require('../models/Categoria');

module.exports = {
    async index(req, res) {
        const categorias = await Categoria.findAll();

        return res.json(categorias);
    },

    async store(req, res) {

        const { nome } = req.body;

        const categoria = await Categoria.create({
            nome: nome
        });

        return res.json(categoria);
    },

    async delete(req, res) {
        const { id } = req.params;

        const categoria = await Categoria.findByPk(id);

        if (!categoria) {
            return res.status(400).json({ error: 'categoria not found ' });
        }

        await Categoria.destroy({
            where: { id }
        })

        return res.json();

    }

}