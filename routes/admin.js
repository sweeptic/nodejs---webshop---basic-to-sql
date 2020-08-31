const path = require('path');
const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();

//termek lista                                  1
//termek felvitel oldal betoltes -> elkuldes    2
//ternek modositas oldal betoltes -> elkuldes   2
//termek torles                                 1


// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);
// /admin/add-product => GET
router.get('/products', adminController.getProducts);
// /admin/add-product => GET
router.get('/edit-product/:productId', adminController.getEditProduct);
// /admin/add-product => GET
router.post('/add-product', adminController.postAddProduct);
// /admin/add-product => GET
router.post('/edit-product', adminController.postEditProduct);
// /admin/add-product => GET
router.post('/delete-product', adminController.postDeleteProduct);


module.exports = router;