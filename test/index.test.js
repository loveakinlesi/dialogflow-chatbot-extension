// var expect = require('chai').expect;
// var chatbotExtension = require("../index");
// var serviceAccount = {
//     "type": "service_account",
//     "project_id": "testProject_id",
//     "private_key_id": "qwertyuiopasdfghjklzxcvbnm1234567890",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nqwertyuiopasdfghjklzxcvbnm1234567890\nqwertyuiopasdfghjklzxcvbnm1234567890/qwertyuiopasdfghjklzxcvbnm1234567890\nqwertyuiopasdfghjklzxcvbnm1234567890/WP/qwertyuiopasdfghjklzxcvbnm1234567890+qwertyuiopasdfghjklzxcvbnm1234567890\nqwertyuiopasdfghjklzxcvbnm1234567890+qwertyuiopasdfghjklzxcvbnm1234567890\n-----END PRIVATE KEY-----\n",
//     "client_email": "firebase-adminsdk-1234@testProject_id.iam.gserviceaccount.com",
//     "client_id": "1234567890987654321",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1234@testProject_id.iam.gserviceaccount.com"
//   }
//   var details = {
//     "name": "Test Chatbot",
//     "databaseURL": "https://testProject_id-default-rtdb.firebaseio.com/",
//     "spreadsheetId": "qwertyuio-pasdfghjklzxcvb-nm1234567890",
//     "timeZone": "Africa/Lagos"
//   }


// describe('initializeApp()', function () {
//     it('should return details', function () {
      
//       // 1. ARRANGE
//         var x = details;
  
//       // 2. ACT
//       var chatbot = new chatbotExtension().initializeApp({credentials: serviceAccount, details: details});
  
//       // 3. ASSERT
//       expect(chatbot).to.be.equal(x);
  
//     });
//   });