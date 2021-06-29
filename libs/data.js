const {google} = require('googleapis');

module.exports = class Data {
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
        if(!sheetName){
            throw new Error('\x1b[31m Sheet Name required! \x1b[0m');
          } else{
        return this._getDataExtension(sheetName);
          }
    }

    async getDatabyQuery(sheetName, query, queryColumn='name'){
        if(!sheetName || !query){
            throw new Error('\x1b[31m Sheet Name and query required! \x1b[0m');
          } else{
        const snapshot = await this._getDataExtension(sheetName);
        for (const i in snapshot){
            if(queryColumn == 'name'){
            if (snapshot[i][queryColumn] == query) {
                return snapshot[i]
            }} else {
                for (const j in snapshot[i].response){
                    if (snapshot[i].response[j].text.includes(query)) {
                        return snapshot[i]
                    }
                }
            }
        }
        return null
    }
    }



    async _getDataExtension(sheetName){

        if(!sheetName){
            throw new Error('\x1b[31m Sheet Name required! \x1b[0m');
          } else{
        const gsapi = google.sheets({version: 'v4', auth: this.client});
        const options = {
            spreadsheetId:  this.spreadsheetId,
            range: sheetName,
        };
        let data = await gsapi.spreadsheets.values.get(options);
        return this._toResponse(this._toObject(data.data.values));
    }
    }

    _toObject(array){
        if(!array || !Array.isArray(array)) {
            throw new Error('\x1b[31m Array of objects required! \x1b[0m');
          } else{
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
    }
    _toResponse(array){
        if(!array || !Array.isArray(array)) {
            throw new Error('\x1b[31m Array of objects required! \x1b[0m');
          } else{
        let result = [];
        for (const item of array){
            let index = result.findIndex((r) => r.name == item.name);
            if(index < 0){
                let newItem = {
                    name: item.name,
                    response: [this._formatResponse(item)]
                }
                result.push(newItem);
            } else if (index >= 0){
                // console.log(item.name)
                item ?  result[index].response.push(this._formatResponse(item)) : null
            }
        }
        return result
    }
    }
    _formatResponse(item){
        if(!item || typeof(item) !== 'object') {
            throw new Error('\x1b[31m Invalid Datatype. Object required! \x1b[0m');
          } else{
        switch (item.type) {
            case 'text':
                return this._formatText(item);
            case 'card':
             return this._formatCard(item);
            case 'image':
                return this._formatImage(item);
            case 'list':
                return this._formatList(item);
            case 'suggestions':
                return this._formatSuggestions(item);
            default:
                return null
        }
    }
    }


    _formatText(data) {
        return {
            type: data.type,
            text: data.text
        }
    }   
    _formatImage(data){
        return {
            type: data.type,
            imageUrl: data.image
        }
    }
    _formatCard(data){
        let response = {
            type: data.type,
            text : data.text,
            imageUrl : data.image,
            buttonText : data.link,
            buttonUrl : data.cta,
        };
        return response
    }
    _formatList(data){
        return {
            type: data.type,
            list: data.text.split('/n').join(", ")
        }
    }
    _formatSuggestions(data){
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
  