// price route
// host + price + user_id + product_name

const { Router } = require('express')
const router = Router()



router.get('/', (req, res) => {
    res.json({
        precio: 'producto'
    })
})

module.exports = router;