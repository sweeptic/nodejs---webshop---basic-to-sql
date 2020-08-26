var fs = require('fs');
var path = require('path');

const p = path.join(
   path.dirname(process.mainModule.filename),
   'data',
   'products.json'
);

const getProductFromFile = (cb) => {
   fs.readFile(p, (err, fileContent) => {
      if (err) {
         cb([]);
      } else {
         cb(JSON.parse(fileContent))
      }
   })
   // const cb = (product) => (
   //    res.render('shop/product-list', {
   //      prods: product,
   //      pageTitle: 'Shop',
   //      path: '/products'
   //    })
   //  )
}



module.exports = class Product {

   static fetchAll(cb) {
      getProductFromFile(cb)
   }

   static findById(id, cb) {

      const cb2 = ((products) => {
         const product = products.find(p => p.id === id);
         cb(product);
      })

      getProductFromFile(cb2);
   }
}