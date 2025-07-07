// setup... similar to when we use default tags in HTML

const express = require("express")
// activate or tells this app variable to be an express server
const app = express()
const router = express.Router()

// start the web server app.listen(portnumber,function)

// making an api using routs
// Routs are used to handle browser request

router.get("/songs", function(req,res){
    const song = {
        title: "Uptown Funk",
        artist: "Bruno Mars",
        popularity: 1,
        genre: ["pop", "dance"]
    }

    res.json(song)
})

app.use("/api", router)
app.listen(3000)