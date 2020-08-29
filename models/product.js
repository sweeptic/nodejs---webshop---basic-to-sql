var fs = require('fs');
var path = require('path');

const p = path.join(
   path.dirname(process.mainModule.filename),
   'data',
   'products.json'
);

const getProductFromFile = (cb2) => {
   fs.readFile(p, (err, fileContent) => {
      if (err) {
         cb2([]);
      } else {
         cb2(JSON.parse(fileContent)) //cb2 lent
      }
   })
   //--- 1.---
   // cb2(JSON.parse(fileContent))
   // const cb2 = ((products) => {
   //    const product = products.find(p => p.id === id);
   //cb1 lent
   //    cb(product);      
   // })
   // ---2.---
   // ---cb---
   // const cb = (product) => {
   //    Cart.addProduct(prodId, product.price)
   //  }



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
      // ---cb---
      // const cb = (product) => {
      //    Cart.addProduct(prodId, product.price)
      //  }

      //definialunk egy masik cb-t, ami a storage bol kiszedi a termeket, es meghivja a fenti cb-t a termekkel.
      //ezt sem hajtjuk még vegre !
      const cb2 = ((products) => {
         const product = products.find(p => p.id === id);
         cb(product);
      })

      //a cb2-t ataduk
      getProductFromFile(cb2);
   }
}