// price route
// host + price + user_id + product_name

const { Router } = require('express')
const router = Router()
const { getPrice } = require('../controllers/price')

router.get('/:user_id/:product_name', getPrice)

module.exports = router;