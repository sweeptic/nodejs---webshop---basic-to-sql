var fs = require('fs');
var path = require('path');

const p = path.join(
   path.dirname(process.mainModule.filename),
   'data',
   'products.json'
);

const getProductFromFile = (cb) => {
   console.log(p)
   console.log(cb)

   cb()

}

module.exports = class Product {


   static fetchAll(cb) {
      getProductFromFile(cb)
   }
}



