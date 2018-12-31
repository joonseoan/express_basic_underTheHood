const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('shop_clone "/"');
    res.send('<html><body><h1>Hello Express</h1></body></html>');

});

module.exports = router;