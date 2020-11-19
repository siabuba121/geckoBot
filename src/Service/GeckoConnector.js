const CoinGecko = require("coingecko-api")

class GeckoConnector {
    constructor() {
        this.initApiClient();
    }

    initApiClient() {
        this.client = new CoinGecko();
    }

    async ping() {
        let data = await this.client.ping();
        console.log(data);

        return data;
    }

    getCoinList() {
        return this.client.coins.list();
    }
}

module.exports = GeckoConnector;

