const express = require("express");
const app = express();
var faker = require("faker");

var name = faker.name.findName();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
    res.render("index.html", {"name":name});
});

app.get("/cpu", function(req, res){
    res.render("cpu.html", {"name":name});
});

app.get("/gpu", function(req, res){
    res.render("gpu.html", {"name":name});
});

app.get("/storage", function(req, res){
    res.render("storage.html", {"name":name});
});

//server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});
