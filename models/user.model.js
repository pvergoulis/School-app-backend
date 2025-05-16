const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required : true
    },
    roles: {
        type: String,
        enum: ['ADMIN', 'TEACHER', 'STUDENT'],
        default: 'STUDENT'
    }
},
   {
     collection: "users",
     timestamps: true  
    }
)

module.exports = mongoose.model("User", userSchema)