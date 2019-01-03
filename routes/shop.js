const express = require('express');
const router = express.Router();
const path = require('path');

const rootDirectory = require('../utils/path');

router.get('/', (req, res, next) => {
    console.log('shop_clone "/"');
    
    // 3) ***** Build directory by itself
    //      It also works at windows and mac.
    res.sendFile(path.join(rootDirectory, 'views', 'shopid.html'));

});

module.exports = router;