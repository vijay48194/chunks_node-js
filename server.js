//console.log("hello");
//process.stdout.write("hello");

process.stdin.on("data",function(data){
	process.stdout.write(data);
	if(data.toString().trim() === "exit")
	{
		process.exit();
	}
})