exports.getAddProduct = (req, res, next) => {
   res.render('admin/edit-product', {
     pageTitle: 'Add Product',
     path: '/admin/add-product',
     editing: false
   });
 };

 exports.getProducts = (req, res, next) => {
  res.render('admin/xx', {
    pageTitle: 'xx',
    path: '/admin/xx',
    editing: false
  });
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