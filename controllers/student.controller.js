const Student = require('../models/student.model')


exports.findAllStundents = async (req,res)=>{
    console.log('finding all students')

    try {
        const result = await Student.find()
        res.status(200).json({status:true, data:result})
    } catch (error) {
        console.log('problem with finding all students ', error)
        res.status(400).json({status:false, data: result})
    }
}

exports.findOneStudentByFirstname = async (req,res) =>{
    let firstname = req.params.firstname
    console.log('Finding student with email: ', firstname)

    try {
        const result = await Student.findOne({firstname : firstname})
        res.status(200).json({status:true, data:result})
    } catch (error) {
        console.log('error in finding the student with name: '. firstname)
        res.status(400).json({status:false, data: error})
    }
}

exports.createStudent = async (req,res)=>{
    let data = req.body
    console.log('Creating a new Student')
    const newStudent = new Student ({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        age: data.age,
        subjects: data.subjects
    })

    try {
        const result = await newStudent.save()
        res.status(200).json({status:true, data: result})
    } catch (error) {
        console.log('Error in creating a new student ', error)
        res.status(400).json({status: false, data:error})
    }
}

exports.updateStudent = async (req,res)=>{
    let email = req.body.email
    console.log('Updating a stundent with email: ', email)
    let updatedStudent = req.body

    try {
        const result = await Student.findOneAndUpdate({email: email}, updatedStudent, {new:true})
        res.status(200).json({status:true, data: result})
    } catch (error) {
        console.log('Error in updating a student ', error)
        res.status(400).json({status: false, data:error})
    }
}

exports.deleteStudentByEmail = async(req,res)=>{
    let email = req.params.email

    try {
        const result = await Student.findOneAndDelete({email: email})
        res.status(200).json({status:true, data: result})
    } catch (error) {
        console.log('Error in deleting a student ', error)
        res.status(400).json({status: false, data:error})
    }
}