const Product = require("../models/product");
const Cart = require('../models/cart');

exports.getIndex = (req, res, next) => {
  const cb = (product) => (
    res.render('shop/index', {
      prods: product,
      pageTitle: 'Shop',
      path: '/'
    })
  )
  Product.fetchAll(cb);
};

exports.getProducts = (req, res, next) => {
  const cb = (product) => (
    res.render('shop/product-list', {
      prods: product,
      pageTitle: 'Shop',
      path: '/products'
    })
  )
  Product.fetchAll(cb);
};

exports.getProduct = (req, res, next) => {

  const prodId = req.params.productId;

  const cb = (product) => (
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    }));

  Product.findById(prodId, cb);
};

exports.getCart = (req, res, next) => {


  res.render('shop/cart', {
    pageTitle: 'xx xx',
    path: '/cart',
    pageTitle: 'Your Cart',
    products: null
  });


};

exports.postCart = (req, res, next) => {

  const prodId = req.body.productId;

  //definialunk egy cb-t. itt meg nem hivjuk meg.
  const cb = (product) => {
    Cart.addProduct(prodId, product.price)
  }

  //prodid + cb atadjuk ennek a findByIdnak es meghivjuk
  Product.findById(prodId, cb);

  res.redirect('/cart');


};

exports.postCartDeleteProduct = (req, res, next) => {
  res.render('/xx-xx', {
    pageTitle: 'xx xx',
    path: '/xxx'
  });
};

exports.getOrders = (req, res, next) => {
  res.render('/xx-xx', {
    pageTitle: 'xx xx',
    path: '/xxx'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('/xx-xx', {
    pageTitle: 'xx xx',
    path: '/xxx'
  });
};