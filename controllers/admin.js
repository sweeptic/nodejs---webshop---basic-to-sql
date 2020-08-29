const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.getProducts = (req, res, next) => {

    // callback
  const cb = (
    products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products',
      });
    })

  Product.fetchAll(cb);
};

exports.getEditProduct = (req, res, next) => {
  res.render('admin/xx', {
    pageTitle: 'xx',
    path: '/admin/xx',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  res.render('admin/xx', {
    pageTitle: 'xx',
    path: '/admin/xx',
    editing: false
  });
};

exports.postEditProduct = (req, res, next) => {
  res.render('admin/xx', {
    pageTitle: 'xx',
    path: '/admin/xx',
    editing: false
  });
};

exports.postDeleteProduct = (req, res, next) => {
  res.render('admin/xx', {
    pageTitle: 'xx',
    path: '/admin/xx',
    editing: false
  });
};