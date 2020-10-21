const { aerialaccess } = require('aerialaccess-nodejs')

// Initialize patient service
const apiKey = 'API_KEY'
const baseUrl = 'BASE_URL' // https://fhir.medicision.com
const patientService = new aerialaccess(apiKey, baseUrl).Patient;

// Execute patient service
const identifier = 123
const patientResponse = patientService.getPatient(identifier)
console.log(patientResponse)