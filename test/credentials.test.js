var expect = require('chai').expect;
var Credentials = require("../libs/credentials");

describe('getCredentials()', function () {
    it('should return credentials', function () {
      
      // 1. ARRANGE
      var serviceAccount = {
        "type": "service_account",
        "project_id": "testProject_id",
        "private_key_id": "qwertyuiopasdfghjklzxcvbnm1234567890",
        "private_key": "-----BEGIN PRIVATE KEY-----\nqwertyuiopasdfghjklzxcvbnm1234567890\nqwertyuiopasdfghjklzxcvbnm1234567890/qwertyuiopasdfghjklzxcvbnm1234567890\nqwertyuiopasdfghjklzxcvbnm1234567890/WP/qwertyuiopasdfghjklzxcvbnm1234567890+qwertyuiopasdfghjklzxcvbnm1234567890\nqwertyuiopasdfghjklzxcvbnm1234567890+qwertyuiopasdfghjklzxcvbnm1234567890\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-1234@testProject_id.iam.gserviceaccount.com",
        "client_id": "1234567890987654321",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1234@testProject_id.iam.gserviceaccount.com"
      }
  
      // 2. ACT
      var credentials = new Credentials(serviceAccount).getCredentials();
  
      // 3. ASSERT
      expect(credentials).to.be.equal(serviceAccount);
  
    });
  });