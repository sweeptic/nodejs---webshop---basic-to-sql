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

  const cb = cart => {

    const cb2 = products => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(prod => prod.id === product.id);
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    }

    Product.fetchAll(cb2)
  }

  Cart.getCart(cb)
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
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  })
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('/xx-xx', {
    pageTitle: 'xx xx',
    path: '/xxx'
  });
};