const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const app=express();
const port = process.env.PORT||3000;
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html")
});
app.post("/",function(req,res){
	var crypto=req.body.crypto;
	var fait=req.body.fait;
	var amount=req.body.amount;
	var baseurl="https://apiv2.bitcoinaverage.com/convert/global"
	// var finalurl=baseurl+crypto+fait;
	var option={
		url:baseurl,
		method:"GET",
		qs:{
			from: crypto,
			to:fait,
			amount:amount

		}

	};

	request(option,function(error,response,body){
		var data=JSON.parse(body);
		var price=data.price;
		console.log(price);
		res.send("<h1>The Current price "+price+"USD</h1>");
	});
});
app.get("/calculater",function(req,res){
	console.log(__dirname);
	res.sendFile(__dirname+"/calculater/index.html");
	
})
app.post("/calculater",function(req,res){
	var a=Number(req.body.num1);
	var b=Number(req.body.num2);
	result=a+b;
	res.send("Result "+result);
})

app.listen(port,function(){
	console.log("server is running");
});