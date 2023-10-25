const Products = require('../models/products')

const getProducts = async (req, res) => {
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

const getprueba = async (req, res) => {
    const prueba = await Products.find()
    try {
        res.json({
            ok: true,
            prueba
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getProducts,
    getprueba
}