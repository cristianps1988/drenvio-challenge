const Products = require('../models/products')
const User = require('../models/users')

const getPrice = async (req, res) => {

    try {
        const { user_id, product_brand } = req.params
        const user = await User.findById(user_id)
        const product = await Products.find({ brand: { $regex: new RegExp(`^${product_brand}$`, "i") }, stock: { $ne: 0 } })
        const hasSpecialPrice = user.special_price.some(item => {
            if (item.toLowerCase() !== product_brand.toLowerCase()) {
                return false
            }
            return true
        })
        const special_price = user.special_price.map(item => {
            if (item.toLowerCase() === product_brand.toLowerCase()) {
                return item.toLowerCase()
            }
            return null
        })

        if (product.length == 0) return res.status(400).json({
            msg: 'We could not find products of this brand'
        })

        if (!hasSpecialPrice) {
            res.json({
                product: product.map(prod => {
                    return {
                        name: `${prod.brand} - ${prod.model}`,
                        price: prod.price
                    }
                })
            })
        }

        if (special_price.find(element => element === product_brand)) {
            res.json({
                product: product.map(prod => {
                    return {
                        name: `${prod.brand} - ${prod.model}`,
                        special_price: prod.special_price
                    }
                })
            })
        }
    } catch (error) {
        res.status(400).json({
            msg: 'Something went wrong'
        })
        console.log(error)
    }
}

module.exports = {
    getPrice
}