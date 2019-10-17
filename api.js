const Api = require('claudia-api-builder')
const api = new Api()

api.get('/', () => 'Welcome to Pizza API')

module.exports = api