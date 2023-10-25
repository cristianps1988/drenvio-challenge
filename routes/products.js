// products route
// host + products

const { Router } = require('express')
const router = Router()
const { getProducts, getprueba } = require('../controllers/products')



router.post('/', getProducts)
router.get('/', getprueba)

module.exports = router;