const axios = require('axios');

export default class Base {
    client;

    constructor(baseUrl, apiKey) {
         this.client = axios.create({
            baseURL: baseUrl,
            headers: {'X-Token-Header': apiKey}
        });
    }
}
