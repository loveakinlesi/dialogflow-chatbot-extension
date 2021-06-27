

 class Text {
    constructor(data){
        this._rawData = data;
        this.type = data.type
        this.text = data.text
        // return data.text
    }

    
    
}

 class List {
    constructor(data){
        this.list = data.list
        return data.list
    }
}

 class Suggestion {
    constructor(data){
        return data.suggestions
    }
}

class Image {
    constructor(imageUrl){
        return imageUrl
    }
}

class CardType1 {
    constructor(data){
        return {
            title: data.title,
            text: data.text,
            buttonText: data.buttonText,
            buttonUrl: data.buttonUrl
        }
    }
}

class CardType2 {
    constructor(data){
        return {
            title: data.title,
            imageUrl: data.imageUrl,
            buttonText: data.buttonText,
            buttonUrl: data.buttonUrl
        }
    }
}
class CardType3 {
    constructor(data){
        return {
            title: data.title,
            text: data.text,
            imageUrl: data.imageUrl,
            buttonText: data.buttonText,
            buttonUrl: data.buttonUrl
        }
    }
}


const dataTypes = Object.freeze({
    Text: Text,
    List: List,
    Suggestion: Suggestion,
    Image: Image,
    CardType1: CardType1,
    CardType2: CardType2,
    CardType3: CardType3,
})



module.exports = dataTypes