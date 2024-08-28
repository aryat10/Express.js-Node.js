const express =  require('express')            // we call the express function to run the app 
const app = express()
const path = require('path')

app.get('/',(request,response)=>{
    response.send('<h1>Hello Aryat server is running succesfully</h1>')      // h1 tag has the data which we need to send after getting the response to server to show 
})

app.get('/contact',(request,response)=>{
    response.send('<h1>Hello Aryat server here will be the constacts</h1>')       // different section can be created with it just /about , /signIn etc
})           

app.get('/files',(request,response)=>{
    response.sendFile(path.join(__dirname,'index.html'))       // path of file index.html is reached out through server 
})

app.get('/jsoneg',(req,res)=>{
    res.json([
        {                               // this code snippet serves as an API endpoint using the Express.js framework in Node.js.
            firstName: 'Hritik', 
            age: 35           
        },
        {     
            firstName: 'Aryat',              
            age: 20
        }
    ])                            
})

app.listen(3000,()=>{
    console.log('Server running...')                 // this is how a server is created and made it to run on port 3000
})