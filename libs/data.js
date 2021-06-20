const {google} = require('googleapis');

module.exports = class data {
    constructor(credentials, details) {
        this.client = new google.auth.JWT(
            credentials.client_email, 
            null, 
            credentials.private_key, 
            details.scopes
          );
        this.spreadsheetId = details.spreadsheetId
        this.client.authorize((err, tokens) => {
            if(err){
                console.log(err);
                this.status = err
                return;
            } else {
                console.log('\x1b[36m%s\x1b[0m', 'Connected');
                this.status = '\x1b[36m Connected \x1b[0m'
            }
          });  
          return this.status    
    }





     getData(sheetName){
        return this.#getDataExtension(sheetName)
    }

    async getDatabyQuery(sheetName, query){
        const snapshot = await this.#getDataExtension(sheetName);
        for (const i in snapshot){
            if (snapshot[i].name == query) {
                return snapshot[i]
            }
        }
        return null
    }



    async #getDataExtension(sheetName){
        const gsapi = google.sheets({version: 'v4', auth: this.client});
        const options = {
            spreadsheetId:  this.spreadsheetId,
            range: sheetName,
        };
        let data = await gsapi.spreadsheets.values.get(options);
        return this.#toResponse(this.#toObject(data.data.values));
    }

    #toObject(array){
        let result = [];
        let headers = array[0]
        let body = array.slice(1, array.length)
        for (const item of body){
            let data = {};
            for (const header of headers){
                data[header] = item[headers.indexOf(header)]
            }
            result.push(data)
        }
        return result
    }
    #toResponse(array){
        // console.log(array)
        let result = [];
        for (const item of array){
            let index = result.findIndex((r) => r.name == item.name);
            if(index < 0){
                let newItem = {
                    name: item.name,
                    response: [this.#formatResponse(item)]
                }
                result.push(newItem);
            } else if (index >= 0){
                // console.log(item.name)
                item ?  result[index].response.push(this.#formatResponse(item)) : null
            }
        }
        return result
    }
    #formatResponse(item){
        switch (item.type) {
            case 'text':
                return this.#formatText(item);
            case 'card':
             return this.#formatCard(item);
            case 'image':
                return this.#formatImage(item);
            case 'list':
                return this.#formatList(item);
            case 'suggestions':
                return this.#formatSuggestions(item);
            default:
                return null
        }
    }


    #formatText(data) {
        return {
            type: data.type,
            text: data.text
        }
    }   
    #formatImage(data){
        return {
            type: data.type,
            imageUrl: data.image
        }
    }
    #formatCard(data){
        let response = {
            type: data.type,
            text : data.text,
            imageUrl : data.image,
            buttonText : data.link,
            buttonUrl : data.cta,
        };
        return response
    }
    #formatList(data){
        return {
            type: data.type,
            list: data.text.split('/n').join(", ")
        }
    }
    #formatSuggestions(data){
        return {
            type: data.type,
            suggestions: data.text.split('/n')
        }
    }
  }








  // Data type
  // - Text resp: string
  // - Image resp: {imageUrl}
//   - CardType1 resp: {title,text, buttonText, buttonUrl}
//   - CardType2 resp: {title,imageUrl, buttonText, buttonUrl}
//   - CardType3 resp: {title,text, imageUrl, buttonText, buttonUrl}
//  - Suggestion resp: []
  