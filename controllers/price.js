const Products = require('../models/products')
const User = require('../models/users')

const getPrice = async (req, res) => {
    const { user_id, product_name } = req.params
    const user = await User.findById(user_id)
    const product = await Products.find({ brand: { $regex: new RegExp(`^${product_name}$`, "i") }, stock: { $ne: 0 } })
    console.log(user.special_price.map(item => {
        return item.toLowerCase() === product_name.toLowerCase() ? true : false
    }))

    try {
        if (user.special_price.length === 0 || !user.special_price.includes(product_name)) {
            res.json({
                product: product.map(prod => {
                    return {
                        name: `${prod.brand} - ${prod.model}`,
                        price: prod.price
                    }
                })
            })
        }
        if (user.special_price.includes(product_name)) {
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
        console.log(error)
    }

    // const products = await Products.find({ stock: { $ne: 0 } })
    // const user = await User.find()

    // try {
    //     res.json({
    //         ok: true,
    //         products
    //     })
    // } catch (error) {
    //     console.log(error)
    // }
}

module.exports = {
    getPrice
}