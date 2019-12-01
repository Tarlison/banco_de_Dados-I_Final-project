const Pessoa = require('../models/Pessoa');

module.exports = {
    async index(req, res) {
        const pessoas = await Pessoa.findAll();

        return res.json(pessoas);
    },

    async store(req, res) {

        const { cpf, nome, endereco } = req.body;

        const pessoa = await Pessoa.create({
            cpf: cpf,
            nome: nome,
            endereco: endereco
        });

        return res.json(pessoa);
    },

    async delete(req, res) {
        const { cpf } = req.params;

        const pessoa = await Pessoa.findByPk(cpf);

        if (!pessoa) {
            return res.status(400).json({ error: 'Pessoa not found ' });
        }

        await Pessoa.destroy({
            where: { cpf }
        })

        return res.json();

    }

}