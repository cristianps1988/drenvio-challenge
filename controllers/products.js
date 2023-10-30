const Products = require('../models/products')

const newProduct = async (req, res) => {
    const product = new Products(req.body)
    try {
        await product.save()
        res.json({
            product
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Something went wrong'
        })
        console.log(error)
    }
}

const getProducts = async (req, res) => {
    const products = await Products.find({ stock: { $ne: 0 } })

    try {
        res.json({
            products
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Something went wrong'
        })
        console.log(error)
    }
}

module.exports = {
    newProduct,
    getProducts
}