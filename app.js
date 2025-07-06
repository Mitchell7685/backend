// setup... similar to when we use default tags in HTML

const express = require("express")
// activate or tells this app variable to be an express server
const app = express()

// start the web server app.listen(portnumber,function)
app.listen(3000,function(){
    console.log("listening on port 3000")
})