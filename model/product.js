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
}



module.exports = class Product {


   static fetchAll(cb) {
      getProductFromFile(cb)
   }
}