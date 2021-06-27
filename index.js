'use strict';

const Details = require("./libs/details");
const Credentials = require("./libs/credentials");
const RealtimeData = require("./libs/realtimeDatabase");
const Data = require("./libs/data");
const responseTypes = require("./libs/responseFunctions");


 module.exports = class chatbotExtension {


    initializeApp(object) {
      if (object === undefined || (typeof object === 'object' && (!object.credentials || !object.details))) {
        throw new Error('\x1b[31m Chatbot Extension failed to Initialize! Both details and credentials are required by ChatbotExtension constructor \x1b[0m');
      }
      else{
        this._details(object.details);
        this._credentials(object.credentials);
        this._data();
        this._realtimeData();
        console.log('\x1b[36m%s\x1b[0m',`${this.name} Initialized`);
        return this
      }
    }
    _details(detail) {
      this._extensionDetails = new Details(detail);
      this.name = this._extensionDetails.name;
      this.databaseURL = this._extensionDetails.databaseURL;
      this.spreadsheetId = this._extensionDetails.spreadsheetId;
      this.scopes = this._extensionDetails.scopes;
      this.timeZone = this._extensionDetails.timeZone
    }
    _credentials(credential) {
      this._extensionCredentials = new Credentials(credential);
    }
    _data(){
      this._extensionData = new Data(this._extensionCredentials.credentials, this._extensionDetails);
    }
    _realtimeData(){
      this._extensionRealtimeData = new RealtimeData(this._extensionCredentials.credentials, this._extensionDetails.databaseURL, this._extensionDetails.timeZone);
    }

    // Credentials Library
    getCredentials() {
      return this._extensionCredentials.credentials;
    }


    // Details Library
    getDetails() {
      return this._extensionDetails.details;
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
        return this._extensionData.getData(sheetName);
      }
    }
    
    getDatabyQuery(sheetName, query){
      return this._extensionData.getDatabyQuery(sheetName, query);
    }

    //Realtime Database
    authorize({email, ipaddress, deviceDetails, location}){
      return this._extensionRealtimeData.authorize({email, ipaddress, deviceDetails, location})
    }
    getRealtimeData(tableName){
      return this._extensionRealtimeData.getRealtimeData(tableName);
    }
    getSessionKey(sessionId){
      return this._extensionRealtimeData.getSessionKey(sessionId)
    }
    getSession(sessionId){
      return this._extensionRealtimeData.getSession(sessionId)
    }
    saveQuery(sessionId, response){
      return this._extensionRealtimeData.saveQuery(sessionId, response)
    }
    saveSession(sessionId, session){
      return this._extensionRealtimeData.saveSession(sessionId, session)
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


