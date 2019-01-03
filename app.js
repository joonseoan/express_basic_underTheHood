const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

// affecting all of the url/routes
app.use(bodyParser.urlencoded({ extended: false}));

// [express.static]
// When permitting the client request to access a directory (a folder )
// Without the specific route/url it affects all routes/url
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);

// It has a router path in shop.js
app.use(shopRouter);


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'pageNotFound.html'));
});

app.listen(3000, () => {
    console.log('server is up at 3000');
});