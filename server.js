const mongoose = require('mongoose')
const app = require('./app')
const PORT = 3000

mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log('Connection with mongoose established')

        app.listen(PORT,()=>{
            console.log('Server is up on port 3000')
        })

    },
    err => {console.log('Failed to connect to MongoDB ', err)}
    )