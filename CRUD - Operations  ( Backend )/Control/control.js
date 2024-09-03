
let book  = [
    {
        id: 1,
        Book: 'As You Like It',
        Author: 'William Shakespeare'
    },
    {
        id: 2,
        Book: 'Pride and Prejudice',
        Author: 'Jane Austen'
    },
    {
        id: 3,
        Book: '1984',
        Author: 'George Orwell'
    },
    {
        id: 4,
        Book: 'Moby Dick',
        Author: 'Herman Melville'
    },
    {
        id: 5,
        Book: 'The Great Gatsby',
        Author: 'F. Scott Fitzgerald'
    }
];


const getBook = (req,res)=>{        // This is actually READ operation in CRUD
    res.json(book)
}



const createBook =(req,res)=>{
    console.log(req.body)       // This is actually CREATE operation in CRUD
    const newBook = req.body
    book.push(newBook)
    res.status(201).json(newBook)
}

const updateBook = (req,res)=>{
    const id = parseInt(req.params.id)            /* This is the UPDATE operation in CRUD where the data can be updated as per the requirement  */
    const update = req.body
    const index = book.findIndex(book => book.id === id)

    if(index !== -1){
        book[index] = {...book[index],...update}
        res.json(book[index])                            
    }
    else{
        req.status(400).json({error:'Book not found'})
    }
}


const delBook = (req,res)=>{
    const id = parseInt(req.params.id)
    const index = book.findIndex(book => book.id === id)                  
                                                                            
    if(index !== -1){
        const del = book[index] 
        book.slice(index,1)                                              // This is the method of Delete operation in CRUD
        res.json(del)
    }
    else{
        res.status(400).json({error: "Not found"})
    }
}



module.exports = {
    getBook,
    createBook,
    updateBook,
    delBook
}
