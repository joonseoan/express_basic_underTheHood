const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const adminRouters = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRouters);
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).send(`<h1>Server Not Found....</h1>`);
});


app.listen(3000, () => {
    console.log('Server is up at 3000.');
});