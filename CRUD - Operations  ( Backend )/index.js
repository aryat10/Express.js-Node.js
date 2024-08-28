const express = require('express')
const app = express()
const router = require('../CRUD - Operations  ( Backend )/Routes/route')


app.use(express.json())          // This is used to parse data into the incoming JSON data in HTTP request which makes it available in the 'req.body'

app.use("/",router) 

app.listen(3000,()=>{
    console.log('Server working')
})