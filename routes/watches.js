const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is the watch page. ');
});

router.post('/', (req, res) => {

});

module.exports = router;
