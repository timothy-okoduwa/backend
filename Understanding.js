const express = require('express')
const port = 900
const app= express()
app.use (express.json())
app.listen(port,()=>{
    console.log(`server is up ${port}`)
})