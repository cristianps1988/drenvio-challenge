const User = require('../models/users')

const newUser = async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.json({
            ok: true,
            user
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    newUser
}