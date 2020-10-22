const aerialaccess = require('aerialaccess-nodejs')

// Initialize claim service
const apiKey = 'API_KEY'
const baseUrl = 'BASE_URL' // https://fhir.medicision.com
const claimService = new aerialaccess.Claim(baseUrl, apiKey);

const identifier = 123
const claimResponse = claimService.getClaim(identifier)
console.log(claimResponse)