const aerialaccess = require('aerialaccess-nodejs')

// Initialize patient service
const baseUrl = 'BASE_URL' // https://fhir.medicision.com
const patientService = new aerialaccess.Patient(baseUrl);

// Get access token
const username = "USER_NAME";
const password = "PASSWORD"
const token = patientService.getJWTToken(username, password);

// Execute patient service
const identifier = 123
const patientResponse = patientService.getPatient(token, identifier)
console.log(patientResponse)