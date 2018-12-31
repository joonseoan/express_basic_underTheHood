const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send(`
        <body>
            <h1>Wecome to Review Page</h1>
            <div>
                <form action='id-checkout' method='POST'>
                    <label>Enter Your ID: </label>
                    <input type='text' name='id'>
                    <button type='submit'>SEND</button>
                </form>
            </div>
        </body>
    `);
});

router.post('/id-checkout', (req, res, next) => {
    console.log(req.body.id);
    res.redirect('/');
});

module.exports = router;