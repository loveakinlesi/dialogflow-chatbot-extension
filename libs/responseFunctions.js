const {
       WebhookClient,
       Card,
       Suggestion,
       Image,
     } = require("dialogflow-fulfillment");

module.exports.Text = function (data) {
       return data.text
   }


module.exports.List = function (data) {
       return data.list
}

module.exports.Suggestion = function (data) {
       return new Suggestion(data.suggestions);
}

module.exports.Image = function (data) {
       return new Image(data.imageUrl);
}

module.exports.TextCard = function (data) {
       return new Card({
              title: data.title,
              text: data.text,
              buttonText: data.buttonText,
              buttonUrl: data.buttonUrl
          })
}

module.exports.ImageCard = function (data) {
       return new Card({
              title: data.title,
              imageUrl: data.imageUrl,
              buttonText: data.buttonText,
              buttonUrl: data.buttonUrl
          })
}
 module.exports.FullCard = function (data) {
       return new Card({
              title: data.title,
              text: data.text,
              imageUrl: data.imageUrl,
              buttonText: data.buttonText,
              buttonUrl: data.buttonUrl
          })
}
module.exports.ContactCard = function (data) {
       return new Card({
              title: 'contact',
              text: `Contact ${data.text}`,
              buttonText: "Get Contact Details",
              buttonUrl: data.buttonUrl
          })
}



// module.exports.responseTypes = Object.freeze({
//     Text: Text,
//     List: List,
//     Suggestion: Suggestion,
//     Image: Image,
//     CardType1: CardType1,
//     CardType2: CardType2,
//     CardType3: CardType3,
// })