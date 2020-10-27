const aerialaccess = require('aerialaccess-nodejs')

// Initialize claim service
const baseUrl = 'BASE_URL' // https://fhir.medicision.com
const claimService = new aerialaccess.Claim(baseUrl)

// Get access token
const username = "USER_NAME";
const password = "PASSWORD"
const token = claimService.getJWTToken(username, password);

// Execute claim service
const identifier = 123
const claimResponse = claimService.getClaim(token, identifier)
console.log(claimResponse)