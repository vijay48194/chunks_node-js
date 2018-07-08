var http =require("http");
var server =http.createServer(function(req,res){
	console.log("received request");
	res.writeHead(200,{"Content-Type":"text/html"
	})
	res.end(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>hello node</title>
			</head>
			<body>
				<h1>coding</h1>
			</body>
		</html>
		`);
})
server.listen(3000);
console.log("server is running on port 3000")