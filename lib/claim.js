export default class Claim extends Base {

    getClaim = async function getClaim(identifier) {
        const data = await this.client.get(`/api/r4/Claim?identifier=${identifier}`);
        return data;
    }
}
