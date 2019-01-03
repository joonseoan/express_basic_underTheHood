//const http = require('http');
const express = require('express');
const app = express();
const path = require('path');

const adminRouter = require('./routes/admin_clone');
const shopRouter = require('./routes/shop_clone');

const bodyParser = require('body-parser');

// it reaches out to all router!!! 
//      because it does not define the specific url (route) here
//      in the same file in express.
app.use(bodyParser.urlencoded({extended: false}));

// [express.static]
// Directly forwarding file system!
// For instance to get a css file in a public folder
// The user is able to access to the 'public' folders css file without the permission
//      because this middleware forwards the user request to the 'public' folder.
// Here in this case, html files in views can be the clients that request the css files in 'public'
app.use(express.static(path.join(__dirname, 'public')));

// [app.use()]
// As specified below, the line location is important.
// '/products' first ------> '/' (detail to general)

// [app.get(), app.post, app.patch, app.put, app.delete]
// On the other hand, app.get, app.post, app.patch, and etc
//  do not care about the line location. They allow exact match only. Not top down.
// app.use(shopRouter)  // works fine.
// app.use(adminRouter);

// When customized default routing/url is required
app.use('/admin', adminRouter);


// **************************************************************************************************************************************************88
// app.use('/', (req, res, next) => {
//     console.log('first /');

//     // It jumps 'add-products' router and directly reach out to the next app.use('/', (req, res, next) => { console.log() })
//     //     which has router ('/')
//     next();
// });

// app.use('/add-products', (req, res, next) => {
//     console.log('another router: /add-products')
//     // res.send('<html><body><h1>Hello ADD-Products</h1></body></html>');
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">ADD PRODUCTS</button></form>');
// });

// middleware
// app.use('/product', (req, res, next) => {
    
//     // in express, by default, req.body can not be parsed automatically.
//     // The parsing method is necessary.
//     // It is the third party package, 'body-parser'
//     // npm i --save body-parser
//     console.log(req.body);

//     res.setHeader('Location', '/');
//     res.redirect('/');

// });


// get
// It is only working only with 'GET' method
// app.get('/product', (req, res, next) => {  
//     res.redirect('/');
// });

//post
// app.post('/product', (req, res, next) => {
//     res.redirect('/');
// });

// It works fine even though the line location is switched because of app.get()
app.use(shopRouter);
// app.use(adminRouter);


// app.use() : '/' must be at the bottom. 
// Detail roouter (/~~~) must be checked first.
// If '/' is checked first, it will not go to any other next routers 
//      because of res.send() which means it is done here.  

// app.use('/', (req, res, next) => {
//     console.log('second /');
//     res.send('<html><body><h1>Hello Express</h1></body></html>');
// });

// app.use() allow us to use middleware function.
// callback inside of app.use() is dealing with every single request from the client.
// next() is a function. the next function allow us to travel the 'next middleware'
//      after the current callback function finishes.

// app.use((req, res, next) => {
//     console.log('In the first middleware');

//     [old version]
//     // res.setHeader('Content-Type', 'text/html');

//     // because of 'return', next() must not be used.
//     //      so that the request from the client cannot reach out to the next 'middleware'
//     // return res.write('<html><body><h1>Hello Node</h1></body></html>');
    
//     Bear in mind that it is an asyn function. Without 'return', the code running
//          will be done before res.setHeader();        

//     [ res.send() ]     
//     // Can't use res.send() as well
//     // res.send('<html><body><h1>Hello Node</h1></body></html>');

//     // as long as we use res.write or res.send, it will not go to the next middleware.

//     // next() allow the request to continue to the next middleware in line
//     next();

// });

// app.use((req, res, next) => {

//     console.log('In the second middleware');

//     // express version
//     // Unlike res.write(), res.send() has a return itself. 
    
//     // Also, default 'Content-Type' is 'text/html'
//     // So if the content type is not a default type, we should need to setup
//     //      res.setHeader('Location, Content-Type.....);
//     // By the way, the content type can be Number, Boolean, and etc.
//     res.send('<html><body><h1>Hello Express</h1></body></html>');

//     // as long as res exists here, we must not use next()
// });

app.use((req, res, next) => {

    // app.use() or app.use('/') takes care of all routes
    // ana also it has a top-down routing way, 
    // it normally controls a 404 error message.

    // send() must be last chain.
    // res.status(404).send(`<h1>Page Not Found</h1>`);

    console.log(path.join(__dirname));
    res.status(404).sendFile(path.join(__dirname, 'views', 'pageNotFound.html'));

});

// old version of server
// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000, () => {

    // app.listen method includes the functions below 
    // For this reason, we do not need to specify them in express.js
    
    // const server = http.createServer(app);
    // server.listen.apply(server, argument);

    console.log(`Server is up! at ${3000}`);
});