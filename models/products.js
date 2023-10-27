const { Schema, model } = require('mongoose')

const ProductsSchema = Schema({
    model: {
        type: String,
        required: true,
        unique: true
    },
    brand: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    special_price: {
        type: Number
    }
})

ProductsSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
})

module.exports = model('Products', ProductsSchema)