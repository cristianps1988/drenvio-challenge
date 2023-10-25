const { Schema, model } = require('mongoose')

const UsersSchema = Schema({
    // nombre: {
    //     type: String,
    //     required: true
    // },
    // courseCode: {
    //     type: String,
    //     required: true,
    //     unique: true
    // }
})

UsersSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
})

module.exports = model('Users', UsersSchema)