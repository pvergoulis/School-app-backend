const express= require('express')
const router = express.Router()

const userController = require('../controllers/user.controller')
const verifyToken = require('../middlewares/auth.middleware').verifyToken
const verifyRoles = require('../middlewares/auth.middleware').verifyRoles

router.get('/',verifyToken,verifyRoles("ADMIN"), userController.findAll)
// router.get('/:username',verifyToken,verifyRoles("ADMIN"), userController.findOne)
router.get('/:username', userController.findOne)
router.post('/register', userController.registerUser)
router.post('/create',verifyToken,verifyRoles("ADMIN"), userController.createUser)

router.patch('/update/:username',verifyToken,verifyRoles("ADMIN"), userController.updateUser)
router.delete('/delete/:username',verifyToken, verifyRoles("ADMIN"), userController.deleteOneUser)
router.get('/check_duplicate_email/:email',userController.checkDuplicateEmail)
router.get('/check_duplicate_email/:username', userController.checkDuplicateUsername)

module.exports = router