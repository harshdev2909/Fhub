const router = require('express').Router()
const productCtrl = require('../controllers/productCtrl')
router.route('/products')
  .get(productCtrl.getProducts)

  module.exports = router;