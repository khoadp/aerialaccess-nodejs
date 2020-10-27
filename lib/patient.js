const Base = require("./base");

class Patient extends Base {

    getPatient = async function getPatient(token, identifier) {
        this.client.defaults.headers.common['x-md-token'] = token;
        const data = await this.client.get(`/api/r3/Patient?identifier=${identifier}`);
        return data;
    }
}

module.exports = Patient;
