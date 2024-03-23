const mongoose = require('mongoose')
const todoappSchema = mongoose.Schema(
    {   
        id:{
            type: Number,
            required: false
        },
        description: {
            type: String,
            required: true
        }
    }
)
const todoapp= mongoose.model('todoappcollection', todoappSchema)
module.exports= todoapp