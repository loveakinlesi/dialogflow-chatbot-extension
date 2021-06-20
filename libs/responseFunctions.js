module.exports.Text = function (data) {
       return data.text
   }


module.exports.List = function (data) {
       return data.list
}

module.exports.Suggestion = function (data) {
       return data.suggestions
}

module.exports.Image = function (data) {
       return data.imageUrl
}

module.exports.CardType1 = function (data) {
       return {
           title: data.title,
           text: data.text,
           buttonText: data.buttonText,
           buttonUrl: data.buttonUrl
       }
}

module.exports.CardType2 = function (data) {
       return {
           title: data.title,
           imageUrl: data.imageUrl,
           buttonText: data.buttonText,
           buttonUrl: data.buttonUrl
       }
}
 module.exports.CardType3 = function (data) {
       return {
           title: data.title,
           text: data.text,
           imageUrl: data.imageUrl,
           buttonText: data.buttonText,
           buttonUrl: data.buttonUrl
       }
}
module.exports.ContactCard = function (data) {
       return {
           title: 'contact',
           text: `Contact ${data.text}`,
           buttonText: "Get Contact Details",
           buttonUrl: data.buttonUrl
       }
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