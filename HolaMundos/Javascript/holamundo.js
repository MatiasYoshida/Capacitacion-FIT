const http = require("http") // require es un módulo puede que contener una clase o una biblioteca de funciones para un propósito específico

const port = 8000


function requestListener(req,res){
    res.writeHead(200,{ 'Content-Type': 'text/plain' });
    res.write("hola mundo")
    res.end();
}

const servidor = http.createServer(requestListener) // method turns your computer into an HTTP server // requestListener : Specifies a function to be executed every time the server gets a request


servidor.listen(port)