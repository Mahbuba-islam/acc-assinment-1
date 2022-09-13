const express = require("express")
const viewCount = require("./middleware/viewCount.js")
const app = express()

app.use(express.json())

const port = process.env.PORT || 5000


  
viewCount()
const userRoutes = require('./routes/v1/user.route.js')



app.use('/api/user/all',userRoutes)

app.all("*", (req, res)=>{
    res.send("no route found.")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });