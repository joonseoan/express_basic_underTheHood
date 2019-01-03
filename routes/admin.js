const express = require('express');
const router = express.Router();
const path = require('path');

const rootDirectory = require('../utils/path');


router.get('/ids', (req, res, next) => {

    console.log('working!!!!!!!!!!!!!!!!')

    res.sendFile(path.join(__dirname, '../', 'views', 'iDs.html'));
    // res.sendFile(path.join(rootDirectory, 'views', 'ids.html'));

});

router.post('/id-checkout', (req, res, next) => {
    console.log(req.body.id);
    res.redirect('/ids');
});

module.exports = router;