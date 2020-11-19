const GeckoConnector = require('../Service/GeckoConnector');
const DatabaseConnector = require('../Service/DatabaseConnector');
require('dotenv').config()

var gecko = new GeckoConnector();

gecko.getCoinList().then(
    function(result) {
        //console.log(result);
    }
);

new DatabaseConnector();
