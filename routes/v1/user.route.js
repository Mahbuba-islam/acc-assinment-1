const { application } = require('express')
const express = require('express')
const userControllers = require('../../controlers/user.controlers.js')
const router = express.Router()


// user get route
router
.route("/")
.get(userControllers.getAllUser)

.post(userControllers.saveUser)



 
router.route
('/:id').get(userControllers.randomUser)
.patch(userControllers.updateUser)
.delete(userControllers.deleteUser)
module.exports=router