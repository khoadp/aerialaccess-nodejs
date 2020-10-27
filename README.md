# Aerialaccess Nodejs Module To Integrate with FHIR APIs

This Nodejs module encapsulates Aerial Access FHIR APIs that helps developers bootstrap their development process

## Installation
```
$ npm install aerialaccess-nodejs
```
## Usages

### Claim APIs

```javascript
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
```

### Patient APIs

```javascript
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
```
