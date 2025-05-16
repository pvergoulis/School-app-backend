const Teacher = require('../models/teacher.model')

exports.findAllTeachers = async(req,res)=>{
    console.log('Finds all teachers')

    try {
        const result = await Teacher.find()
        res.status(200).json({status:true, data: result})
    } catch (error) {
        console.log("problem in finding all teacher", error)
        res.status(400).json({status:false, data:error})
    }
}

exports.findTeacherByVat = async(req,res)=>{
    let vat = req.params.vat
    console.log('finding a teacher with vat ', vat)
    try {
        const result = await Teacher.findOne({vat: vat})
        res.status(200).json({status:true, data: result})
    } catch (error) {
        console.log("problem in finding the spesific teacher", error)
        res.status(400).json({status:false, data:error})
    }
}

exports.findTeacherByFirstname = async(req,res)=>{
    let firstname = req.params.firstname
    console.log('finding a teacher with firstname ', firstname)
    try {
        const result = await Teacher.findOne({firstname: firstname})
        res.status(200).json({status:true, data: result})
    } catch (error) {
        console.log("problem in finding the spesific teacher", error)
        res.status(400).json({status:false, data:error})
    }
}


exports.findTeacherByEmail = async(req,res)=>{
    let email = req.params.email
    console.log('finding a teacher with email ', email)
    try {
        const result = await Teacher.findOne({email: email})
        res.status(200).json({status:true, data: result})
    } catch (error) {
        console.log("problem in finding the spesific teacher", error)
        res.status(400).json({status:false, data:error})
    }
}


exports.createTeacher = async(req,res)=>{
    let data = req.body

    const newTeacher = new Teacher({
        firstname : data.firstname,
        lastname: data.lastname,
        vat: data.vat,
        city: data.city,
        age: data.age,
        cv: data.cv,
        phone: data.phone,
        email: data.email,
        subjects : data.subjects
        
    })

    try {
        const result = await newTeacher.save()
        res.status(200).json({status:true, data: result})
    } catch (error) {
        console.log('error in creating new Teacher', error)
        res.status(400).json({status: false, data: error})
    }
}

exports.updateTeacher = async(req,res) =>{
    console.log('Updating a teacher')

    let vat = req.body.vat

    const updatedTeacher = req.body

    try {
        const result = await Teacher.findOneAndUpdate({vat: vat}, updatedTeacher, {new:true})
        res.status(200).json({status:true, data: result})
    } catch (error) {
        console.log('error in updating a Teacher', error)
        res.status(400).json({status: false, data: error})
    }
}

exports.deleteTeacherByVat = async (req,res)=>{
    let vat = req.params.vat
    console.log('Delete a teacher with vat ', vat)

    try {
        const result = await Teacher.findOneAndDelete({vat: vat})
        res.status(200).json({status:true, data: result})
    } catch (error) {
        console.log('error in deleting a Teacher', error)
        res.status(400).json({status: false, data: error})
    }
}


exports.deleteTeacherByEmail = async (req,res)=>{
    let email = req.params.email
    console.log('Delete a teacher with email ', email)

    try {
        const result = await Teacher.findOneAndDelete({email: email})
        res.status(200).json({status:true, data: result})
    } catch (error) {
        console.log('error in deleting a Teacher', error)
        res.status(400).json({status: false, data: error})
    }
}
