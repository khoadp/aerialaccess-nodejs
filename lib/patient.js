const Base = require("./base");

class Patient extends Base {

    getPatient = async function getPatient(identifier) {
        const data = await this.client.get(`/api/r3/Patient?identifier=${identifier}`);
        return data;
    }
}

module.exports = Patient;
