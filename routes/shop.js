const express = require('express');
const router = express.Router();

router.get('/shop', (req, res, next) => {

    res.send(`
        <h1>What do want to place an order?</h1>
        <form action="/orderedItem" method="POST">
            <label>Type items</label>
            <input type="text" name="item">
            <button type="submit">SUBMIT</button>
        </form>   
    `);

});

router.post('/orderedItem', (req, res, next) => {

    res.send(`You ordered ${req.body.item}`);

});


module.exports = router;