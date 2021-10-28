const http = require("http") // require es un módulo puede que contener una clase o una biblioteca de funciones para un propósito específico

const port = 8000


function requestListener(req,res){
    res.write("Hola Mundo")
    res.end
}


servidor = http.createServer(requestListener) // method turns your computer into an HTTP server // requestListener : Specifies a function to be executed every time the server gets a request

servidor.listen(port)