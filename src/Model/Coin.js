const { DataTypes, Model } = require('sequelize');

class Coin extends Model {
    static async initModel(client) {
        await this.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                coin_id: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                symbol: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false
                }
            },
            {
                sequelize: client,
                modelName: 'Coin'
            }
        )
    }
}

module.exports = Coin;

