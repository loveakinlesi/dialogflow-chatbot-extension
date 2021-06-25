# Dialogflow Chatbot Extension
![npm](https://img.shields.io/npm/v/dialogflow-chatbot-extension?style=plastic)
[![🚀 Publish](https://github.com/iiitma/dialogflow-chatbot-extension/actions/workflows/publish.yml/badge.svg)](https://github.com/iiitma/dialogflow-chatbot-extension/actions/workflows/publish.yml)
[![CodeQL](https://github.com/iiitma/dialogflow-chatbot-extension/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/iiitma/dialogflow-chatbot-extension/actions/workflows/codeql-analysis.yml)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/dialogflow-chatbot-extension)
![Snyk Vulnerabilities for npm package version](https://img.shields.io/snyk/vulnerabilities/npm/dialogflow-chatbot-extension@latest?style=plastic)
[![GitHub license](https://img.shields.io/github/license/iiitma/dialogflow-chatbot-extension)](https://github.com/iiitma/dialogflow-chatbot-extension/blob/main/LICENSE)
## Table of Contents

 - **[Overview](#overview)**
 - **[Installation](#installation)**
 - **[Implementation](#implementation)**
    - [Details](#details) 
    - [Data](#data) 
    - [Response Formatting](#response%20formatting) 
 - **[Contributing](#contributing)**
 - **[License](#license)**


## Overview
Dialogflow Chatbot Extension is a Node JS extension for chatbots built with [Dialogflow](https://dialogflow.cloud.google.com/#) and utilize [Firebase](https://firebase.google.com/) Cloud Functions. Dialogflow Chatbot Extension allows connection with Firebase Realtime Database and Google Spreadsheet.


## Installation
Using npm:
```zsh
$ npm install dialogflow-chatbot-extension
```
```js
const chatbotExtension = require("dialogflow-chatbot-extension");
```

## Implementation

```js
const details = require("./details.json"); 
const chatbotExtension = require("dialogflow-chatbot-extension");

const chatbot = new chatbotExtension().initializeApp({
    credentials: serviceAccount
    details: details });
```
initializeApp takes in two objects: A service account key and details. The details.json file has this format.
```json
{
    "name": "Chatbot Name",
    "databaseURL": "Firebase Realtime Database url",
    "spreadsheetId": "Google Spreadsheet ID",
    "timeZone":  "Africa/Lagos"
}
```

### Details
```js
const chatbotname = chatbot.getName() //Returns Chatbot Name defined in details

const databaseURL = chatbot.getDatabaseURL() //Returns databaseURL defined in details

const spreadsheetId = chatbot.getSpreadsheetId() //Returns spreadsheetId defined in details

const timeZone = chatbot.getTimezone() //Returns timeZone defined in details

const credentials = chatbot.getCredentials() //Returns service account credentials

const details = chatbot.getDetails() //Returns all details

```
### Data
All Data related functions should be called from an async function.
```js

async function getData(query) {
  let snapshot = await chatbot.getDatabyQuery(sheetName, query);
  console.log(snapshot)
};
```
All Data functions
````js
await chatbot.getData(sheetName);

await chatbot.getDatabyQuery(sheetName, query);

await chatbot.authorize({email, ipaddress, deviceDetails, location});

await chatbot.getRealtimeData(tableName);

await chatbot.getSession(sessionId);

await chatbot.getSessionKey(sessionId);

await chatbot.saveQuery(sessionId, response);

await chatbot.saveSession(sessionId, session);
````

### Response Formatting
Dialogflow Chatbot Extension current supports eight(8) response types which are formatted to the appropriate dialogflow-fulfillment datatypes.
- Text 
````js        
 agent.add(nosa.ResponseText(data.response[i])) 
 ````
- List
````js        
 agent.add(nosa.ResponseList(data.response[i])) 
 ````
- Image
````js        
 agent.add(nosa.ResponseImage(data.response[i])) 
 ````
- Suggestion
````js        
 agent.add(nosa.ResponseSuggestion(data.response[i])) 
 ````
- TextCard
- ImageCard
- FullCard
- ContactCard
````js        
 agent.add(nosa.ResponseTextCard(data.response[i])) // Text Card
 agent.add(nosa.ResponseImageCard(data.response[i])) // Image Card
 agent.add(nosa.ResponseFullCard(data.response[i])) // Full Card
 agent.add(nosa.ResponseContactCard(data.response[i])) // Contact Card
 ````



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

<!-- ### Keywords -->
