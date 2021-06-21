'use strict';

const Details = require("./libs/details");
const Credentials = require("./libs/credentials");
const RealtimeData = require("./libs/realtimeDatabase");
const Data = require("./libs/data");
const responseTypes = require("./libs/responseFunctions");


 module.exports = class chatbotExtension {
    #extensionData;
    #extensionRealtimeData;
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
        this.#realtimeData();
        console.log('\x1b[36m%s\x1b[0m',`${this.name} Initialized`);
        return this
      }
    }
    #details(detail) {
      this.#extensionDetails = new Details(detail);
      this.name = this.#extensionDetails.name;
      this.databaseURL = this.#extensionDetails.databaseURL;
      this.spreadsheetId = this.#extensionDetails.spreadsheetId;
      this.scopes = this.#extensionDetails.scopes;
      this.timeZone = this.#extensionDetails.timeZone
    }
    #credentials(credential) {
      this.#extensionCredentials = new Credentials(credential);
    }
    #data(){
      this.#extensionData = new Data(this.#extensionCredentials.credentials, this.#extensionDetails);
    }
    #realtimeData(){
      this.#extensionRealtimeData = new RealtimeData(this.#extensionCredentials.credentials, this.#extensionDetails.databaseURL, this.#extensionDetails.timeZone);
    }

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
    getTimezone(){
      return this.timeZone
    }



    //Data Library
    getData(sheetName){
      if(!sheetName){
        throw new Error('\x1b[31m Sheet Name required! \x1b[0m');
      } else{
        return this.#extensionData.getData(sheetName);
      }
    
    }
    getDatabyQuery(sheetName, query){
      return this.#extensionData.getDatabyQuery(sheetName, query);
    }

    //Realtime Database
    authorize({email, ipaddress, deviceDetails, location}){
      return this.#extensionRealtimeData.authorize({email, ipaddress, deviceDetails, location})
    }
    getRealtimeData(tableName){
      return this.#extensionRealtimeData.getRealtimeData(tableName);
    }
    getSessionKey(sessionId){
      return this.#extensionRealtimeData.getSessionKey(sessionId)
    }
    getSession(sessionId){
      return this.#extensionRealtimeData.getSession(sessionId)
    }
    saveQuery(sessionId, response){
      return this.#extensionRealtimeData.saveQuery(sessionId, response)
    }
    saveSession(sessionId, session){
      return this.#extensionRealtimeData.saveSession(sessionId, session)
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
    ResponseTextCard(data){
      return responseTypes.TextCard(data)
    }
    ResponseImageCard(data){
      return responseTypes.ImageCard(data)
    }
    ResponseFullCard(data){
      return responseTypes.FullCard(data)
    }
    ResponseContactCard(data){
      return responseTypes.ContactCard(data)
    }




  }


