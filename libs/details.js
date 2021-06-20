module.exports = class details {
    constructor(details) {
      this.details = details;
      this.name = details.name;
      this.databaseURL = this.getDatabaseURL();
      this.spreadsheetId = details.spreadsheetId;
      this.scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    }
    getDetails() {
      return this.details;
    }
    getName() {
      return this.name;
    }
    getDatabaseURL() {
      let databaseURLSplit = this.getDetails().databaseURL.split('://');
      databaseURLSplit[0] = 'ws';
      return databaseURLSplit.join('://');
    }
    getSpreadsheetId() {
      return this.spreadsheetId;
    }
    getScopes() {
      return this.scopes;
    }
  }
  

