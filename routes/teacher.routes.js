const express = require('express')
const router = express.Router()

const teacherController = require('../controllers/teacher.controller')
const verifyToken = require('../middlewares/auth.middleware').verifyToken
const verifyRoles = require('../middlewares/auth.middleware').verifyRoles

router.get('/', teacherController.findAllTeachers)
router.get('/:vat', teacherController.findTeacherByVat)
router.get('/email/:email',teacherController.findTeacherByEmail)
router.get('/firstname/:firstname', teacherController.findTeacherByFirstname)
router.post('/create',verifyToken , verifyRoles("ADMIN"), teacherController.createTeacher)
router.patch('/update/:vat', verifyToken , verifyRoles("ADMIN"),teacherController.updateTeacher)
router.delete('/delete/vat/:vat',verifyToken , verifyRoles("ADMIN"),teacherController.deleteTeacherByVat)
router.delete('/delete/email/:email',verifyToken , verifyRoles("ADMIN"),teacherController.deleteTeacherByEmail)



module.exports= router