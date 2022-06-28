const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 3000

// connect to mongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }).then(() => {
    console.log('connected to mongodb')
}).catch(err => {
    console.log(err)
})

//start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
