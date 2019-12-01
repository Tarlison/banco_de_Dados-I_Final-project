const Cargo = require('../models/Cargo');

module.exports = {
    async index(req, res) {
        const cargos = await Cargo.findAll();

        return res.json(cargos);
    },

    async store(req, res) {

        const { nome, salario } = req.body;

        const cargo = await Cargo.create({
            nome: nome,
            salario: salario
        });

        return res.json(cargo);
    },

    async delete(req, res) {
        const { id } = req.params;

        const cargo = await Cargo.findByPk(id);

        if (!cargo) {
            return res.status(400).json({ error: 'Cargo not found ' });
        }

        await Cargo.destroy({
            where: { id }
        })

        return res.json();

    }

}