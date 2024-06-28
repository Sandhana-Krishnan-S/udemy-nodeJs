const http = require('http')

const requestHandler = require('./router')

const app = http.createServer(requestHandler)

app.listen(3000)