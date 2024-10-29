const express = require('express')
const userController = require('../controllers/userCondroller')
const projectController = require('../controllers/projectController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const multerMiddlware = require('../middlewares/multerMiddleware')

const router = new express.Router()

// register : post requset to http://localhost:3000/register
router.post(`/register`,userController.registerController)
// login : post requset to http://localhost:3000/login
router.post(`/login`,userController.loginController)
// add project : post requset to http://localhost:3000/add-project
router.post(`/add-project`,jwtMiddleware,multerMiddlware.single("projectImg"),projectController.addProjectController)
// homeprojects : get requset to http://localhost:3000/home-projects
router.get('/home-projects',projectController.gethomeProjectController)
// allprojects : get requset to http://localhost:3000/all-projects
router.get('/all-projects',jwtMiddleware,projectController.getAllProjectController)
// userprojects : get requset to http://localhost:3000/user-projects
router.get('/user-projects',jwtMiddleware,projectController.getUserProjectController)
// removeprojects : delete requset to http://localhost:3000/pid/remove-projects
router.delete('/:pid/remove-projects',jwtMiddleware,projectController.removeProjectController)
// editprojects : put requset to http://localhost:3000/pid/edit-projects
router.put('/:pid/edit-projects',jwtMiddleware,multerMiddlware.single("projectImg"),projectController.editProjectController)
// edit user : put requset to http://localhost:3000/user/edit
router.put('/user/edit',jwtMiddleware,multerMiddlware.single('profilePic'),userController.editProfileController)

// export router
module.exports = router