const fs = require('fs')

let KEY = fs.readFileSync('APIKEY').toString()
KEY = KEY.trim()
console.log('Key: ', KEY)


const config = {
  apiKey: KEY
}

module.exports = config
