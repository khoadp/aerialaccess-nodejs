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
const apiKey = 'API_KEY'
const baseUrl = 'BASE_URL' // https://fhir.medicision.com
const claimService = new aerialaccess.Claim(baseUrl, apiKey);

// Execute claim service
const identifier = 123
const claimResponse = claimService.getClaim(identifier)
console.log(claimResponse)
```

### Patient APIs

```javascript
const aerialaccess = require('aerialaccess-nodejs')

// Initialize patient service
const apiKey = 'API_KEY'
const baseUrl = 'BASE_URL' // https://fhir.medicision.com
const patientService = new aerialaccess.Patient(baseUrl, apiKey);

// Execute patient service
const identifier = 123
const patientResponse = patientService.getPatient(identifier)
console.log(patientResponse)

```
