var fs = require('fs');
var path = require('path');
const Cart = require('./cart');

const p = path.join(
   path.dirname(process.mainModule.filename),
   'data',
   'products.json'
);

const getProductsFromFile = (cb2) => {
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
   constructor(id, title, imageUrl, description, price) {
      this.id = id;
      this.title = title;
      this.imageUrl = imageUrl;
      this.description = description;
      this.price = price;
   }

   static fetchAll(cb) {
      getProductsFromFile(cb)
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
      getProductsFromFile(cb2);
   }

   save() {
      getProductsFromFile(products => {
         if (this.id) {
            const existingProductIndex = products.findIndex(prod => prod.id === this.id);
            const updatedProducts = [...products];
            updatedProducts[existingProductIndex] = this;
            fs.writeFile(p, JSON.stringify(updatedProducts), err => {
               console.log(err);
            });
         } else {
            this.id = Math.random().toString();
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
               console.log(err);
            });
         }
      });
   }

   static deleteById(id) {
      getProductsFromFile(products => {
         const product = products.find(prod => prod.id === id);
         const updatedProducts = products.filter(p => p.id !== id);
         fs.writeFile(p, JSON.stringify(updatedProducts), err => {
            if (!err) {
               Cart.deleteProduct(id, product.price);
            }
         });
      });
   }


}