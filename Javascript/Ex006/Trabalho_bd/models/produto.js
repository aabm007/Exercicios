module.exports = (sequelize, DataTypes) => {
    const Estoque = sequelize.define('Produto_bd', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preco: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });

    return Produto_bd;
};