
const fs = require("fs").promises;
const http = require("http");

const port = 8000



const requestListener = function(req, res){
    fs.readFile(__dirname + "/holaMundo.html")
        .then(contents => {
            res.setHeader("Content-Type","text/html")
            res.writeHead(200)
            res.end(contents)
        })
        .catch(err => {
            res.writeHead(500)
            res.end(err)
            return
        })
}

servidor = http.createServer(requestListener)

servidor.listen(port)