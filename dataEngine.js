
module.export.dataEngine = class dataEngine {
    constructor(details) {
      this.details = details
      this.name = details.name;
      this.databaseURL = details.databaseURL;
      this.spreadsheetId = details.spreadsheetId
    }

    getDetails(){
        return this.details;
    }
    getName(){
        return this.name;
    }
    getDatabaseURL(){
        return this.databaseURL;
    }
    getSpreadsheetId(){
        return this.spreadsheetId;
    }
  }