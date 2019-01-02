const express = require('express');
const router = express.Router();
const path = require('path');

const rootDirectory = require('../utils/path');

router.get('/', (req, res, next) => {
    console.log('shop_clone "/"');
    
    // 3) ***** Build directory by itself
    //      It also works at windows and mac.
    res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));

    // 2)
    // When sending a file, instead of literal text/string-based html like above
    // Directory criteria must be based on app_clone.js / app.js 
    //      which is under the root folder. Because this current file is
    //      imported to them.
    
    // => error because it must be an absolute directory in the local pc
    // res.sendFile('./views/shop.html'); 
    
    console.log(path.join()); // the current directory "."
    console.log(__dirname); // C:\Users\joona\OneDrive\myApps\node\2ndPhase\express_server\routes 
    console.log(path.join(__dirname)); // C:\Users\joona\OneDrive\myApps\node\2ndPhase\express_server\routes

    //C:\Users\joona\OneDrive\myApps\node\2ndPhase\express_server\routes\views\shop.html ==> wrong directory
    console.log(path.join(__dirname, 'views', 'shop.html')); 
    //C:\Users\joona\OneDrive\myApps\node\2ndPhase\express_server\views\shop.html // correct
    console.log(path.join(__dirname, '../', 'views', 'shop.html')); 

    // the first parameter 'the current root directory'
    // the second parameter '../' upper level directory current directroy and etc (optional)
    // the third parameter 'folder in the root directory
    // the forth parameter 'the final file' we want to get

    // *******'..' is better because it works in both windows and mac!!!!
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
    
    // 1)
    // res.send('<html><body><h1>Hello Express</h1></body></html>');
});

module.exports = router;