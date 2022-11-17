module.exports = app => {
   const product = require('../controllers/product.controller.js')

   const router = require('express').Router()

   router.get('/', product.findAll)

   router.post('/', product.create)

   router.get('/:id', product.findOne)
   
   router.delete('/:id', product.delete)

   router.put('/:id', product.update)

   app.use('/api/product', router) // if you type localhost:8080/api/product 하면 findAll 결과가 나옴
}