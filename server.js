const
	app = require('./app'),
	port = process.env.PORT || 8181,
	http = require('http'),
	server = http.createServer(app);

server.listen(port);
server.on('listening',()=>{
	console.log('Server rodando em: http://localhost:%s ',server.address().port);
});