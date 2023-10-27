const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.send('You Have Reached The Users Page.')
});

router.post('/', (req,res) => {

});

module.exports = router;