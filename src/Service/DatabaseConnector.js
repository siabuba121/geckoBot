const { Sequelize } = require('sequelize');
const Coin  = require('../Model/Coin')
const format = require('string-format')

class DatabaseConnector {
    constructor() {
        this.dbUrl = format('{0}://{1}:{2}@{3}:{4}/{5}',
            'mysql',
            process.env.DB_USER,
            process.env.DB_USER_PASSWORD,
            process.env.DB_HOST,
            process.env.DB_PORT,
            process.env.DB_NAME
        );
    }

    async init(sync = false) {
        this.client = new Sequelize(
            this.dbUrl,
            {
                define: {
                    freezeTableName: true
                }
            }
        );

        let self = this;
        await this.testConnection().then(
            function() {
                self.initModels();
                if (sync === true) {
                    self.syncModels();
                }
            }
        );
    }

    async testConnection() {
        try {
            await this.client.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

    initModels() {
        Coin.initModel(this.client).then(
            function() {
                console.log("init of models done.");
            });
    }

    syncModels() {
        this.client.sync(
            {
                alter:true
            }
        ).then(
            function() {
                console.log("sync done.")
            }
        )
    }
}

module.exports = DatabaseConnector
