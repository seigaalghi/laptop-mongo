const express = require("express") // import dari module / package / dependency 
const apaAja = require('./util/loop') // import dari file yang kita buat sendiri
const app = express()
const port = 5000 || 8000 // front end 3000

app.get("/hello", (req, res)=>{
    return res.status(401).json({
        "message" : "Hello World"
    })
})

app.listen(port, ()=> console.log("Project is running at port", port))