const express = require('express');

// 'Router()' is a field of express object.
//      making a simple router
const router = express.Router();
const path = require('path');

const rootDirectory = require('../utils/path');

// If the methods(GET, POST and etc) are different, the same url can be used. 

// 2) intermediate level

// In app_clone or app.js, we can invoke the callback like this .
//  app.use('/admin', adminRouter);

// 1) at the begginer's level
router.get('/add-products', (req, res, next) => {
    console.log('admin_clone: GET, "/admin/add-products"')
    
    // 3)
    // Build the root directory by itself.
    res.sendFile(path.join(rootDirectory, 'views', 'add-products.html'));

    // 2)
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-products.html'));

    // 1)
    // res.send('<form action="/admin/add-products" method="POST"><input type="text" name="title"><button type="submit">ADD PRODUCTS</button></form>');

});

router.post('/add-products', (req, res, next) => {
    
    console.log('admin_clone: POST, /admin/add_products"');
    console.log(req.body);
    res.redirect('/');
    
    // Why it is not working?
    // res.setHeader('Location', '/');

});

// Then, let's talk about views

// // 1) at the begginer's level
// router.get('/admin/add-products', (req, res, next) => {
//     console.log('admin_clone: "/admin/add-products"')
//     res.send('<form action="/admin/add-products" method="POST"><input type="text" name="title"><button type="submit">ADD PRODUCTS</button></form>');

// });


// router.post('/admin/add-products', (req, res, next) => {    
//     console.log('admin_clone: "/admin/add_products"');
//     console.log(req.body);
//     res.redirect('/');
    
//     // Why it is not working? ********************************************** still question.....****************************************************
//     // res.setHeader('Location', '/');

// });

// router.get('/add-products', (req, res, next) => {
//     console.log('admin_clone: "/add-products"')
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">ADD PRODUCTS</button></form>');

// });

// //app.post() => router.post()
// router.post('/product', (req, res, next) => {
    
//     console.log('admin_clone: "/product"');
//     console.log(req.body);
//     res.redirect('/');
    
//     // Why it is not working?
//     // res.setHeader('Location', '/');

// });

module.exports = router;
