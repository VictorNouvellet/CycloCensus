var config = {};

//You can change your port number here
config.port = 8080;

//Default API Key :
//Grab it here : https://developer.jcdecaux.com
config.apiKey = process.env.JCDECAUX_API_KEY || "[YOUR_API_KEY_HERE]";

module.exports = config;

