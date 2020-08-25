const Product = require("../model/product");


exports.getIndex = (req, res, next) => {
  const cb =(product) => (
    res.render('shop/index', {
      prods: product,
      pageTitle: 'Shop',
      path: '/'
    })
  )
  Product.fetchAll(cb);
};

exports.getProducts = (req, res, next) => {
  const cb =(product) => (
    res.render('shop/product-list', {
      prods: product,
      pageTitle: 'Shop',
      path: '/products'
    })
  )
  Product.fetchAll(cb);
};

exports.getProduct = (req, res, next) => {
  res.render('/xx-xx', {
    pageTitle: 'xx xx',
    path: '/xxx'
  });
};

exports.getCart = (req, res, next) => {
  res.render('/xx-xx', {
    pageTitle: 'xx xx',
    path: '/xxx'
  });
};

exports.postCart = (req, res, next) => {
  res.render('/xx-xx', {
    pageTitle: 'xx xx',
    path: '/xxx'
  });
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