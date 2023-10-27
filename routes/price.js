// price route
// host + price + user_id + product_brand

const { Router } = require('express')
const router = Router()
const { getPrice } = require('../controllers/price')

router.get('/:user_id/:product_brand', getPrice)

module.exports = router;