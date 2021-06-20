const details = require("./libs/details");
const credentials = require("./libs/credentials");
const realtimeDatabase = require("./libs/realtimeDatabase");
const data = require("./libs/data");
const responseTypes = require("./libs/responseFunctions");


 module.exports = class chatbotExtension {
    #extensionData;
    #extensionDetails;
    #extensionCredentials;

    initializeApp(object) {
      if (object === undefined || (typeof object === 'object' && (!object?.credentials || !object?.details))) {
        throw new Error('\x1b[31m Chatbot Extension failed to Initialize! Both details and credentials are required by ChatbotExtension constructor \x1b[0m');
      }
      else{
        this.#details(object.details);
        this.#credentials(object.credentials);
        this.#data();
        console.log('\x1b[36m%s\x1b[0m',`${this.name} Initialized`);
        return this
      }
    }
    #details(detail) {
      this.#extensionDetails = new details(detail);
      this.name = this.#extensionDetails.name;
      this.databaseURL = this.#extensionDetails.databaseURL;
      this.spreadsheetId = this.#extensionDetails.spreadsheetId;
      this.scopes = this.#extensionDetails.scopes;
    }
    #credentials(credential) {
      this.#extensionCredentials = new credentials(credential);
    }
    #data(){
      this.#extensionData = new data(this.#extensionCredentials.credentials, this.#extensionDetails);
    }
    


    // Requires ${!object?.details && !object?.credentials ? 'credentials and details' : (!object?.credentials ? 'credentials': 'details'



    // Credentials Library
    getCredentials() {
      return this.#extensionCredentials.credentials;
    }


    // Details Library
    getDetails() {
      return this.#extensionDetails.details;
    }
    getName() {
      return this.name;
    }
    getDatabaseURL() {
      return this.databaseURL;
    }
    getSpreadsheetId() {
      return this.spreadsheetId;
    }



    //Data Library
    getData(sheetName){
      return this.#extensionData.getData(sheetName);
    }

    getDatabyQuery(sheetName, query){
      return this.#extensionData.getDatabyQuery(sheetName, query);

    }



    // Response Library

    ResponseText(data){
     return responseTypes.Text(data)
    }

    ResponseList(data){
      return responseTypes.List(data)
    }


    ResponseImage(data){
      return responseTypes.Image(data)
    }
    ResponseSuggestion(data){
      return responseTypes.Suggestion(data)
    }
    ResponseCardType1(data){
      return responseTypes.CardType1(data)
    }
    ResponseCardType2(data){
      return responseTypes.CardType2(data)
    }
    ResponseCardType3(data){
      return responseTypes.CardType3(data)
    }




  }


