const path = require('path');
const express = require('express');
const shopController = require('../controllers/shop');
const router = express.Router();

//kezdooldal                  1
//osszes termek               1
//egy termek                  1
//kosar betoltes - elkuldes   2
//kosarbol torles             1
//rendelesek                  1
//checkout                    1

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router