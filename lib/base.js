const axios = require('axios');

class Base {
    client;

    constructor(baseUrl) {
        this.client = axios.create({
            baseURL: baseUrl,
        });
    }

    getJWTToken = async function getJWTToken(username, password) {
        const data = await this.client.get(`/api/v1/generate_jwt?username=${username}&password=${password}`);
        return data.token;
    }
}

module.exports = Base;