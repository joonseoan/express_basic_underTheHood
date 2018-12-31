const express = require('express');

// Simple express router.
const router = express.Router();

//app.use() => router.get()
router.get('/add-products', (req, res, next) => {
    console.log('admin_clone: "/add-products"')
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">ADD PRODUCTS</button></form>');

});

//app.post() => router.post()
router.post('/product', (req, res, next) => {
    
    console.log('admin_clone: "/product"');
    console.log(req.body);
    res.redirect('/');
    
    // Why it is not working?
    // res.setHeader('Location', '/');

});

module.exports = router;
