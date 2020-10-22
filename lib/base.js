const axios = require('axios');

class Base {
    client;

    constructor(baseUrl, apiKey) {
        this.client = axios.create({
            baseURL: baseUrl,
            headers: {'X-Token-Header': apiKey}
        });
    }
}

module.exports = Base;