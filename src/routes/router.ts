


import express from 'express'



const ProductController = require('../controller/productcontroller')

const router = express.Router();



router.get('/products', ProductController.fetchAllProduct)
router.get('/products/:id', ProductController.fetchProductById)
router.post('/add-products', ProductController.postProduct)
router.put('/update-product', ProductController.updateProduct)
router.put('/update-product/:id', ProductController.updateProductById)
router.delete('/delete-product/:id', ProductController.deleteProductById)
 


module.exports = router;
