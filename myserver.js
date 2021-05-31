const express = require('express')
const port = 5000

const arr = [
    {id: 1, name: "romannus", course: "web"},
    {id: 1, name: "samuel", course: "backend"},
    {id: 1, name: "judith", course: "mobile"},
    {id: 1, name: "goodluck", course: "ui/ux"},
    {id: 1, name: "esther", course: "javascript"},
]
const server = express()
server.get("/", (req, res)=>{
    console.log("welcome")
    res.send("welcome")
})
server.get("api/students")

server.listen(port,()=>{
    console.log(`server is running ${port}`)
})