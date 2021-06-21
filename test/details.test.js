var expect = require('chai').expect;
var Details = require("../libs/details");
var details = {
  "name": "Test Chatbot",
  "databaseURL": "https://testProject_id-default-rtdb.firebaseio.com/",
  "spreadsheetId": "qwertyuio-pasdfghjklzxcvb-nm1234567890",
  "timeZone": "Africa/Lagos"
}

describe('getDetails() ', function () {
    it('should return details', function () {
      
      // 1. ARRANGE
      var x = details;
  
      // 2. ACT
      var y = new Details(details).getDetails();
  
      // 3. ASSERT
      expect(x).to.be.equal(y);
  
    });
  });

  describe('getName() ', function () {
    it('should return Name', function () {
      
      // 1. ARRANGE
      var x = details.name;
  
      // 2. ACT
      var y = new Details(details).getName();
  
      // 3. ASSERT
      expect(x).to.be.equal(y);
  
    });
  });

  
  describe('getDatabaseURL() ', function () {
    it('should return databaseURL', function () {
      
      // 1. ARRANGE
      var x = "ws://testProject_id-default-rtdb.firebaseio.com/";
  
      // 2. ACT
      var y = new Details(details).getDatabaseURL();
  
      // 3. ASSERT
      expect(x).to.be.equal(y);
  
    });
  });

  describe('spreadsheetId() ', function () {
    it('should return spreadsheetId', function () {
      
      // 1. ARRANGE
      var x = details.spreadsheetId;
  
      // 2. ACT
      var y = new Details(details).getSpreadsheetId();
  
      // 3. ASSERT
      expect(x).to.be.equal(y);
  
    });
  });

  describe('getScopes() ', function () {
    it('should return scopes', function () {
      
      // 1. ARRANGE
      var x = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
  
      // 2. ACT
      var y = new Details(details).getScopes();
  
      // 3. ASSERT
      expect(x.join()).to.be.equal(y.join());
  
    });
  });

  describe('getTimezone() ', function () {
    it('should return timeZone', function () {
      
      // 1. ARRANGE
      var x = details.timeZone;
  
      // 2. ACT
      var y = new Details(details).getTimezone();
  
      // 3. ASSERT
      expect(x).to.be.equal(y);
  
    });
  });