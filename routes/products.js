// products route
// host + products

const { Router } = require('express')
const router = Router()
const { getProducts, newProduct } = require('../controllers/products')



router.post('/', newProduct)
router.get('/', getProducts)

module.exports = router;