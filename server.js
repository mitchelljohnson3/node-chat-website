const http = require('http')

http.createServer( (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    })

    response.write(request.url)

    response.end()
}).listen(1337)