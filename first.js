const http = require('http')

const server = http.createServer((req, res) => {
    console.log("A new request received!")
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.end('Hello World!')

})
server.listen(8080, '127.0.0.1', () => {
    console.log("server started!")
})



