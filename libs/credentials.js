module.exports = class Credentials {
    constructor(credentials) {
      if(!credentials){
        throw new Error('\x1b[31m Chatbot Extension failed to Initialize! Both details and credentials are required by ChatbotExtension constructor \x1b[0m');
      } else if (!credentials.client_email || !credentials.private_key || !credentials.project_id || !credentials.type || credentials.type !== 'service_account'){
        throw new Error('\x1b[31m Invalid Credentials! \x1b[0m');
      } else{
        this.credentials = credentials;
      }
    
    }
    getCredentials() {
      return this.credentials;
    }
  }