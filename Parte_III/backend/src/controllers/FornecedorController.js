const Fornecedor = require('../models/Fornecedor');

module.exports = {
    async index(req, res) {
        const fornecedores = await Fornecedor.findAll();

        return res.json(fornecedores);
    },

    async store(req, res) {

        const { cnpj, nome_fantasia, nome_produto, endereco } = req.body;

        const fornecedor = await Fornecedor.create({
            cnpj: cnpj,
            nome_fantasia: nome_fantasia,
            nome_produto: nome_produto,
            endereco: endereco
        });

        return res.json(fornecedor);
    },

    async delete(req, res) {
        const { cnpj } = req.params;

        const fornecedor = await Fornecedor.findByPk(cnpj);

        if (!fornecedor) {
            return res.status(400).json({ error: 'Fornecedor not found ' });
        }

        await Fornecedor.destroy({
            where: { cnpj }
        })

        return res.json();

    }

}