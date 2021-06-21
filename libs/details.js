module.exports = class Details {
    constructor(details) {
      if (details === undefined || (typeof details === 'object' && (!details?.name || !details?.databaseURL || !details?.spreadsheetId || !details?.timeZone))) {
        throw new Error('\x1b[31m Invalid Details! Name, databaseURL, spreadsheetId and timeZone are required by Details constructor \x1b[0m');
      } else {
      this.details = details;
      this.name = details.name;
      this.databaseURL = this.getDatabaseURL();
      this.spreadsheetId = details.spreadsheetId;
      this.timeZone = details.timeZone;
      this.scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
      }
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
    getTimezone(){
      return this.timeZone
    }
  }
  

