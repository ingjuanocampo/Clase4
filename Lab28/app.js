var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {
		"Content-Type": "text/plain"
	});

	res.end("Hello Unipiloto APM-2\n");
});

server.listen(3333);

//Servidor en node js el cual responde por el puerto 3333 del localhost
