const express = require('express')
const app = express()
const product = require('./data')          // data from the file is store now 

app.get('/',(req,res)=>{          // This is only for Home page of the website
    res.send('<h1>Home Page</h1><a href = "/api/product" >Your Products</a>')
})


app.get('/api/product/:productID',(req,res)=>{


    // const newItem = product.map((product)=>{
        const {productID} = req.params
        // const {id,Name,image} = product          // Here , price of the product is not visible as  it has mapped or not shown from the api though it has been included
        // return {id,Name,image}
        // res.json(newItem)
        console.log(req.params)
        const singlePro = product.find((product)=> product.id === Number(productID))
        if(!singlePro){
            res.status(404).send('no product!')
        }
        res.json(singlePro)

    })
    


app.get('/api/v2/query',(req,res)=> {
    let sortPro = [...product]                           // Queries are used to send small info to server using URL 
    const {search,limit} = req.query
    if(search){
        sortPro = sortPro.filter((pro) => pro.Name.startsWith(search));             // Here , we have a filter regarding the search of a any product let say with a name starting letter search 
                                                         // If there is a need of a query sending of a product to know by seaching about it with starting letter we can do it using Query 
    }

    if(limit){
        sortPro = sortPro.slice(0,Number(limit))
        
    }

    res.json(sortPro)
    
})
    


app.listen(3000,()=>{
    console.log('Server working....')
})

