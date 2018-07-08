var https=require("https");
var fs= require("fs");
var options={
	hostname:"en.wikipedia.org",
	path:"/wiki/India",
	method:"GET",
	port:443
}
var req= https.request(options,function(res){
	var body="";
	res.setEncoding("UTF-8")
	res.on("data",function(chunk){
		body += chunk;
		
	})
	res.on("end",function(){
		fs.writeFile("india.html",body,function(err){
			if(err){
				throw err;
			}else{
				console.log("file downloaded")
			}
		})
	})
});

req.end();

