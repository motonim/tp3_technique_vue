const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const corsOption = {
   origin: 'http://localhost:8081'  // cors(중간자역할) will request and receive the db and send it to vue.js 
}

app.use(cors(corsOption))

//model
const db = require('./app/models')

//sequelize
db.connex.sync() // il va tout synchroniser avec les choses dans models/index.js

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//test
app.get('/', (req, res) => {
   res.json({ message: 'Welcome' })
})

//route
require('./app/routes/product.route')(app)
const PORT = 8080
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}.`)
})