module.exports  = function(app) {
   var store = require('../controllers/storeController');

   app.route('/items')
     .get(store.findAll);
   
   app.route('/items/:itemId')
     .get(store.findById);
   
};
