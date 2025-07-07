// setup... similar to when we use default tags in HTML

const express = require("express")
// activate or tells this app variable to be an express server
const app = express()
const router = express.Router()

// start the web server app.listen(portnumber,function)
app.listen(3000,function(){
    console.log("listening on port 3000")
})

// making an api using routs
// Routs are used to handle browser request

// GET or a regular request
app.get("/hello", function(req,res){
    res.send("<h1>Hello Express</h1>")
});

app.get("/goodbye", function(req,res){
    res.send("<h1>Goodbye Express</h1>");
});