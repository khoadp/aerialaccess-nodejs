const Base = require("./base");

class Claim extends Base {

    getClaim = async function getClaim(token, identifier) {
        this.client.defaults.headers.common['x-md-token'] = token;
        const data = await this.client.get(`/api/r4/Claim?identifier=${identifier}`);
        return data;
    }
}

module.exports = Claim;