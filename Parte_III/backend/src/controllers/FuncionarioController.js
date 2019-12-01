const Funcionario = require('../models/Funcionario');

module.exports = {
    async index(req, res) {
        const funcionarios = await Funcionario.findAll();

        return res.json(funcionarios);
    },

    async store(req, res) {

        const { nome, cpf, salario, cargo } = req.body;

        const funcionario = await Funcionario.create({
            nome: nome,
            cpf: cpf,
            salario: salario,
            cargo: cargo
        });

        return res.json(funcionario);
    },

    async delete(req, res) {
        const { id } = req.params;

        const funcionario = await Funcionario.findByPk(id);

        if (!funcionario) {
            return res.status(400).json({ error: 'Employee not found ' });
        }

        await Funcionario.destroy({
            where: { id }
        })

        return res.json();
    }

}