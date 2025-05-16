const mongoose= require('mongoose')
const Schema= mongoose.Schema

let subjectSchema = new Schema ({
    subjectName: {
        type: String
    },
    grade: {
        type: String
    }
})

let studentSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required : true,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    },
    age : {
        type: Number
    },
    subjects: {type: [subjectSchema]}
},{
    collection: "students",
    timestamps: true
})

module.exports= mongoose.model("Student", studentSchema)