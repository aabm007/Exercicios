const { Sequelize, Datatypes } = require('sequelize');
const config = require('./config/config');
const ProdutoModel = require('./models/produto');
const sequelize = new Sequelize(config.development);
const Produto = ProdutoModel(sequelize, Datatypes);
async function run() {
    try {
        const produtoCriado = await Produto.create({
            nome: 'Produto A',
            preco: 19.99,
            descricao: 'Descrição do Produto A'
        });
        console.log('Produto criado', produtoCriado.toJSON());

        const produtos = await Produto.findAll();
        console.log('Produtos Cadastrados:', produtos.map(p => p.toJSON()));

        const produtoAtualizado = await Produto.update(
            { preco: 29.99 },
            { where: { id: produtoCriado.id } }
        );
        console.log (
            'Produto atualizado',
            produtoAtualizado[0] > 0 ? 'Atualização com sucesso' : 'Produto não encontrado'
        );

        const produtoRemovido = await Produto.destroy({ where: { id: produtoCriado.id } });
        console.log(
            'Produto Removido',
            produtoRemovido > 0 ? 'Removido com sucesso' : 'Produto não encontrado'
        );
    } catch (error) {
        console.error('Error', error.message);
    } finally {
        await Produto.sequelize.close();
    }
}
run();
    