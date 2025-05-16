const express = require('express')
const router = express.Router()

const studentController = require('../controllers/student.controller')
const verifyRoles = require('../middlewares/auth.middleware').verifyRoles
const verifyToken = require('../middlewares/auth.middleware').verifyToken


router.get('/', studentController.findAllStundents)
router.get('/:firstname', studentController.findOneStudentByFirstname)
router.post('/create',verifyToken,verifyRoles("ADMIN" , "TEACHER"), studentController.createStudent)
router.patch('/update/:email', verifyToken, verifyRoles("ADMIN" , "TEACHER"), studentController.updateStudent)
router.delete('/delete/:email', verifyToken, verifyRoles("ADMIN" , "TEACHER"), studentController.deleteStudentByEmail)


module.exports = router