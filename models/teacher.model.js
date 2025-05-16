const mongoose = require('mongoose')
const Schema = mongoose.Schema

let subjectSchema = new Schema({
    subjectName : {
        type: String
    }
})

let teacherSchema = new Schema({
    firstname: {
        type:String,
        required: true
    },
    lastname: {
        type:String,
        required: true
    },
    vat: {
        type:String,
        required:true,
        unique: true
    },
    city: {
        type:String,
        required: true
    },
    age: {
        type: Number,
        required:true
    },
    cv: {
        type: String,
        required:true
    },
    phone: {
        type: Number
    },
    email: {
        type:String
    },
    subjects:{type: [subjectSchema]}
},
{
    collection:"teachers",
    timestamps: true
})

module.exports = mongoose.model("Teacher", teacherSchema)