const express = require('express')
require('dotenv').config();

const { dbConnection } = require('./db/config')


const app = express()

dbConnection()

app.use(express.json())


app.use('/products', require('./routes/products'))
app.use('/price', require('./routes/price'))

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto 4000`)
})