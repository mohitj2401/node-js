const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
	console.log(__dirname);
	res.sendFile(__dirname+"/index.html");
	
})
app.post("/",function(req,res){
	var a=Number(req.body.num1);
	var b=Number(req.body.num2);
	result=a+b;
	res.send("Result "+result);
})
app.listen(3000,function(){
	console.log("Server is started!");
})