var express = require("express");
var cors = require("cors");
var bodyparser = require("body-parser");
var app = express();
var a;
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Connected")
    res.end();
})

app.post("/json",(req,res)=>{
console.log(req.body)
 a = req.body;
res.json(req.body);
    res.end();
})

app.get("/getjson",(req,res)=>{
    res.send(a);
})
var port = process.env.PORT || 4000;
app.listen(port)
console.log(port)
