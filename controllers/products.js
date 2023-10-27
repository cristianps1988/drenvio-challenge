const Products = require('../models/products')

const newProduct = async (req, res) => {
    const product = new Products(req.body)
    try {
        await product.save()
        res.json({
            ok: true,
            product
        })
    } catch (error) {
        console.log(error)
    }
}

const getProducts = async (req, res) => {
    const products = await Products.find({ stock: { $ne: 0 } })

    try {
        res.json({
            ok: true,
            products
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    newProduct,
    getProducts
}