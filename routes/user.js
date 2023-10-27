// users route
// host + user

const { Router } = require('express')
const router = Router()
const { newUser } = require('../controllers/user')



router.post('/', newUser)

module.exports = router;