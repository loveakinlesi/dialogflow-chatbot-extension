const admin = require("firebase-admin");
module.exports = class realtimeDatabase {
    
    #session = {
        step: '',
        sections: '',
        currentsection: '',
        topics: '',
        currenttopic: '',
        tour: '',
        name: '',
    }

    constructor(object) {
        admin.initializeApp({
            credential: admin.credential.cert(object.credentials),
            databaseURL: object.databaseURL,
          });
        this.admin = admin;
        this.db = admin.database();
      }


      savequery(sessionId, res) {
        let data = {
          sessionId: sessionId,
          query: res.queryResult.queryText,
          dateTime: new Date().toDateString(),
          action: res.queryResult.action,
          responseName: res.queryResult.intent.displayName,
        }
      admin.database().ref("queryList").push(data)
    }


    getsessionkey(sessionId) {
        var db = admin.database();
        var sessions = db.ref("sessionkey");
        return sessions.on("value", (snapshot) => {
          var listofkeys = snapshot.val();
          for (const i in listofkeys) {
            if (listofkeys[i].sessionId == sessionId) {
              return listofkeys[i].key;
            }
          }
        });
      }
  
      async getsession(sessionId) {
        var db = admin.database();
        var usersSession = db.ref("session");
        let session = await usersSession.on("value", (snapshot) => {
          var listofsessions = snapshot.val();
          for (const i in listofsessions) {
            if (listofsessions[i].sessionId == sessionId) {
              step = listofsessions[i].step;
              sections = listofsessions[i].sections;
              currentsection = listofsessions[i].currentsection;
              topics = listofsessions[i].topics;
              currenttopic = listofsessions[i].currenttopic;
              tour = listofsessions[i].tour;
              name = listofsessions[i].name;
            }
          }
        });
      }
  
    //    savesession() {
    //     getsessionkey(sessionId);
    //     var key = sessionkey;
    //     var db = admin.database();
    //     var user = db.ref("session/" + key);
  
    //     user.update({
    //       sessionId: sessionId,
    //       step: step,
    //       sections: sections,
    //       currentsection: currentsection,
    //       topics: topics,
    //       currenttopic: currenttopic,
    //       tour: tour,
    //     });
    //   }
}