require('dotenv').config()

const express = require('express')
const app= express()
const mongoose = require("mongoose")
const productRoute=require('./routes/productRoute')
const errorMiddleware = require('./middleware/errorMiddleware')
const cors = require('cors')


const MONGODB_URL=process.env.MONGODB_URL
const PORT = process.env.PORT ||3000
const FRONTEND=process.env.FRONTEND

var corsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200 
}

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors(corsOptions))

app.use('/api/product',productRoute)

app.get('/',(req, res)=>{
    res.send('hello world')
})

app.use(errorMiddleware)


mongoose.connect(MONGODB_URL)
.then(()=>{
    app.listen(PORT, (req, res)=>{
    console.log('node api app is running on port 3000')
})
})
.catch(err=>{
    console.log(err)
})

